import {createApp} from 'vue'
// @ts-ignore
import Toast,{ToastType}  from '../components/Toast.vue'

const createToast = (message: string, type: ToastType='default', dismiss?: () => void, timeout: number=2000) => {
    const toast = createApp(Toast, {
        message,
        type
    })
    const mountNode = document.createElement('div')
    document.body.appendChild(mountNode)
    toast.mount(mountNode)
    setTimeout(() => {
        toast.unmount(mountNode)
        document.body.removeChild(mountNode)
        if (dismiss) {
            dismiss()
        }
    }, timeout)
}

export default createToast;
