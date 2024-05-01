import {toast} from 'react-toastify'

export const notifySuccess = (message: string) => {
    toast.success(message)
}

export const notifyWarning = (message: string) => {
    toast.warning(message)
}

export const notifyErrors = (message: string) => {
    toast.error(message)
}