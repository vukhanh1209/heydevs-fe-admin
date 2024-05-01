import { notifyErrors, notifySuccess } from "./notification";



export const handleServiceResponse = (res : any) => {
    const status = res?.meta?.requestStatus
    if(status === "rejected") {
        notifyErrors(res?.error?.message);
    }
    else if(status === "fulfilled") {
        notifySuccess(res?.payload?.message)
    }
}