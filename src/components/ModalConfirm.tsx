import Image from "next/image";
import CloseIcon from "@/images/close.svg";

type ModalConfirmProps = {
  onClose: () => void;
  onSubmit: () => void;
  title: string;
  isOpen: boolean;
};

export default function ModalConfirm({
  isOpen = false,
  onClose,
  onSubmit,
  title,
}: ModalConfirmProps) {
  if (!isOpen) return <></>;
  return (
    <div className="fixed top-0 left-0 right-0 flex items-center justify-center w-full h-screen bg-blur-form z-[100] px-5 py-8 overflow-auto">
      <section className="h-fit w-full md:max-w-[40%] bg-white rounded-lg mt-10">
        <div className="flex justify-between items-center border-b border-silver-grey py-4 px-8 ">
          <h1 className="font-bold text-xl text-primary-black ">Xác nhận</h1>

          <button className="p-2 hover:bg-light-grey rounded-full transition-all">
            <Image
              onClick={onClose}
              width={32}
              height={32}
              src={CloseIcon}
              alt="close"
            />
          </button>
        </div>
        <div className="p-8">
          <p className="text-base text-primary-black ">{title}</p>
        </div>

        <div className="flex justify-between gap-2 py-4 px-8 border-t border-t-silver-grey">
          <button
            type="button"
            onClick={onClose}
            className="text-rich-grey text-base px-4 py-3 md:px-6 rounded-lg hover:bg-light-grey"
          >
            Hủy
          </button>
          <button
            onClick={onSubmit}
            className="text-white bg-primary-red text-base px-4 py-3 md:px-6 rounded-lg hover:bg-dark-red gap-5 max-w-[130px] md:max-w-[180px] w-full"
          >
            Xác nhận
          </button>
        </div>
      </section>
    </div>
  );
}
