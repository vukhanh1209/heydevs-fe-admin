import { keepPreviousData, useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { ClipLoader } from "react-spinners";

import InfoSection from "./InfoSection";
import { EMPLOYEE_STATUS } from "@/enums/employee.enum";
import {
  changeEmployeeStatus,
  getEmployeeDetail,
} from "@/services/api/employee.api";
import IntroSection from "./IntroSection";
import EduSection from "./EduSection";
import SkillsSection from "./SkillSection";
import { getUserProfileDTO } from "@/services/employee/employee.service";
import ModalConfirm from "@/components/ModalConfirm";
import { notifyErrors, notifySuccess } from "@/utils/notification";
import { useRouter } from "next/navigation";
import { PATH } from "@/const/path.const";

const DATA = {
  [EMPLOYEE_STATUS.ACTIVE]: {
    notification: "Khóa tài khoản ứng viên thành công",
    buttonTitle: "Khóa tài khoản",
    modalTitle: "Người dùng sẽ không thể đăng nhập sau khi tài khoản bị khóa",
  },
  [EMPLOYEE_STATUS.INACTIVE]: {
    notification: "Kích hoạt tài khoản ứng viên thành công",
    buttonTitle: "Mở tài khoản",
    modalTitle: "Kích hoạt tài khoản cho ứng viên",
  },
};

export default function EmployeeDetail({ id }: { id: string }) {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const router = useRouter();
  const { isLoading, data } = useQuery({
    queryKey: ["employee-detail", id],
    queryFn: () => getEmployeeDetail(id),
    select: getUserProfileDTO,
    placeholderData: keepPreviousData,
    refetchOnWindowFocus: false,
  });

  const { isPending, mutate: changeAccountStatus } = useMutation({
    mutationKey: ["change-employee-status"],
    mutationFn: () =>
      changeEmployeeStatus({
        userId: Number(id),
        status:
          data?.userStatus === EMPLOYEE_STATUS.ACTIVE
            ? EMPLOYEE_STATUS.INACTIVE
            : EMPLOYEE_STATUS.ACTIVE,
        reason: "",
      }),
    onSuccess: () => {
      data && notifySuccess(DATA[data.userStatus].notification);
      router.replace(PATH.EMPLOYEE.get());
    },
    onError: () => {
      notifyErrors("Đã xảy ra lỗi");
    },
  });

  if (isLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <ClipLoader color="#ed1b2f" size={50} />
      </div>
    );
  }

  return (
    <>
      <section className="w-full flex flex-col py-10 px-6">
        <div className="flex items-start justify-between  py-8">
          {data && <InfoSection info={data.info} />}

          <div className="relative group text-base">
            <div
              className={`flex justify-center px-5 py-2 rounded-lg border border-rich-grey text-rich-grey font-semibold w-[150px]`}
            >
              {data?.userStatus}
            </div>
            {/* <div className="h-3 w-full absolute top-[100%]"></div>
          <ul className="absolute top-[100%] group-hover:visible group-hover:opacity-100 invisible opacity-0 transition-opacity w-full flex duration-500 border border-dropdown-border mt-2 flex-col bg-white rounded-lg p-2 z-50 shadow-lg text-rich-grey">
            {EMPLOYEE_STATUSES.filter((status) => status != currentStatus).map(
              (status: any, index: number) => (
                <li
                  onClick={() => setCurrentStatus(status)}
                  key={index}
                  className={`px-3 py-2 hover:bg-light-grey text-center cursor-pointer rounded-lg`}
                >
                  {status}
                </li>
              )
            )}
          </ul> */}
          </div>
        </div>
        {data && (
          <section className=" flex flex-col gap-6 col-span-full lg:col-span-8">
            <IntroSection introduction={data?.aboutMe || ""} />
            <EduSection education={data?.education} />
            <SkillsSection skills={data?.skills || []} />
          </section>
        )}

        <div className="flex justify-center pb-10 mt-5">
          <button
            onClick={() => setIsOpenModal(true)}
            className="text-white bg-primary-red text-base font-medium lg:text-lg py-3 px-8 rounded-lg hover:bg-dark-red w-fit transition-all"
          >
            {data && DATA[data.userStatus].buttonTitle}
          </button>
        </div>
      </section>
      {data && (
        <ModalConfirm
          isOpen={isOpenModal}
          onClose={() => setIsOpenModal(false)}
          title={DATA[data.userStatus].modalTitle}
          onSubmit={changeAccountStatus}
          isPending={isPending}
        />
      )}
    </>
  );
}
