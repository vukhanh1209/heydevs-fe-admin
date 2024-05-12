"use client";

import ModalConfirm from "@/components/ModalConfirm";
import { PATH } from "@/const/path.const";
import {
  getRegistrationDetail,
  sendAccountToRecruiter,
} from "@/services/api/registration.api";
import { notifyErrors, notifySuccess } from "@/utils/notification";
import { keepPreviousData, useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ClipLoader } from "react-spinners";

function RegistrationFormDetailPage({ params }: { params: { id: string } }) {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const router = useRouter();
  const { isLoading, data: registrationData } = useQuery({
    queryKey: ["registration-detail", params.id],
    queryFn: () => getRegistrationDetail(params.id),
    placeholderData: keepPreviousData,
    refetchOnWindowFocus: false,
  });

  const { isPending, mutate: sendAccount } = useMutation({
    mutationKey: ["send-account"],
    mutationFn: (recruiterId: string) => sendAccountToRecruiter(recruiterId),
    onSuccess: () => {
      notifySuccess("Gửi email cho nhà tuyển dụng thành công");
      router.replace(PATH.REGISTRATION.get());
    },
    onError: () => {
      notifyErrors("Đã xảy ra lỗi khi gửi email đến nhà tuyển dụng");
    },
  });

  if (isLoading) {
    return (
      <div className="w-full h-[calc(100vh-88px)] flex items-center justify-center">
        <ClipLoader color="#ed1b2f" size={50} />
      </div>
    );
  }

  return (
    <>
      <main className="flex flex-col justify-between w-full min-h-[calc(100vh-88px)] bg-white p-[30px] max-w-[1000px] mx-auto">
        <div className=" bg-white w-full text-rich-grey px-6 py-8">
          <h1 className="text-xl lg:text-3xl text-primary-black pb-4 font-bold text-center">
            Thông tin đơn đăng ký
          </h1>
          <div className="grid grid-cols-[230px_auto] gap-3 py-6">
            <div className="w-fit text-base font-medium grid grid-rows-[8] gap-2 [&>p]:h-6">
              <p>Tên người đăng ký:</p>
              <p>Chức vụ:</p>
              <p>Email:</p>
              <p>Số điện thoại:</p>
              <p>Tên công ty:</p>
              <p>Địa chỉ công ty:</p>
              <p>Địa chỉ website:</p>
              <p>Biết đến Heydevs thông qua:</p>
            </div>
            <div className="w-full text-base grid grid-rows-[8] gap-2 [&>p]:h-6">
              <p>{registrationData?.fullName}</p>
              <p>{registrationData?.workTitle}</p>
              <p>{registrationData?.username}</p>
              <p>{registrationData?.phoneNumber}</p>
              <p>{registrationData?.companyName}</p>
              <p>{registrationData?.companyLocation}</p>
              <p>{registrationData?.websiteUrl}</p>
              <p>{registrationData?.hearAboutUs}</p>
            </div>
          </div>
        </div>
        <button
          onClick={() => setIsOpenModal(true)}
          className="text-white bg-primary-red text-base font-medium lg:text-lg py-3 px-8 rounded-lg hover:bg-dark-red w-fit transition-all mx-auto"
        >
          Chấp thuận
        </button>
      </main>
      <ModalConfirm
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        title="Bạn muốn phê duyệt đơn đăng ký của nhà tuyển dụng?"
        onSubmit={() => sendAccount(params.id)}
        isPending={isPending}
      />
    </>
  );
}

export default RegistrationFormDetailPage;
