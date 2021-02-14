import {createApp, ComputedRef} from 'vue'
import Alert  from '../components/Alert'

const showAlert = (message: string, onConfirm: () => void, onCancel: () => void = ComputedRef<cancel>) => {
    const alert = createApp(Alert, {
        message
    })
    const mountNode = document.createElement('div')
    document.body.appendChild(mountNode)
    alert.mount(mountNode)

    const cancel = () => {
        alert.unmount(mountNode)
        document.body.removeChild(mountNode)
    }
}

export default showAlert;