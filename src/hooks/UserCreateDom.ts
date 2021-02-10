import {onUnmounted} from 'vue'

const userCreateDom = (nodeId: string) => {
    const node = document.createElement('div')
    node.id = nodeId;
    document.body.appendChild(node)
    onUnmounted(() => {
        document.body.removeChild(node)
    })
}

export default userCreateDom
