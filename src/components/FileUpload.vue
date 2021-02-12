<template>
  <div>
    <button class="btn btn-primary" @click.prevent="clickUpload">
      <span v-if="status==='success'">上传成功</span>
      <span v-else-if="status==='failed'">上传失败</span>
      <span v-else-if="status==='uploading'">上传中</span>
      <span v-else>点击上传</span>
    </button>
    <input type="file" ref="uploadInput" class="d-none" @change="onUploadFile">
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType, ref} from 'vue'
import axios from "axios";

type uploadState = 'success' | 'failed' | 'ready' | 'uploading'
type BeforeUpload = (file:File) => boolean

export default defineComponent({
  name: "FileUpload",
  props: {
    action: {
      type: String,
      required: true
    },
    beforeUpload: {
      type: Function as PropType<BeforeUpload>
    },
    headers: {
      type: Object,
      default: {}
    }
  },
  emits: ['uploadSuccess', 'uploadFailed'],
  setup(props, context) {
    const status = ref<uploadState>('ready')
    const uploadInput = ref<null|HTMLInputElement>(null)
    const clickUpload = () => {
      if (uploadInput.value) {
        uploadInput.value.click()
      }
    }
    const onUploadFile = (e:Event) => {
      const target = e.target as HTMLInputElement
      if (target.files) {
        const files = Array.from(target.files)
        if (props.beforeUpload) {
          const result = props.beforeUpload(files[0])
          if (!result) {
            return
          }
        }
        status.value = 'uploading'
        const formData = new FormData()
        formData.append('file', files[0])
        axios.post(props.action, formData, {
          headers: {
            ...props.headers,
            'Content-Type': 'multipart/form-data'
          }
        }).then(res=>{
          status.value = 'success'
          context.emit('uploadSuccess', res)
        }).catch(err=>{
          status.value = 'failed'
          context.emit('uploadFailed', { err })
        }).finally(()=>{
          if (uploadInput.value) {
            uploadInput.value.value = ''
          }
        })
      }
    }
    return {
      status,
      uploadInput,
      clickUpload,
      onUploadFile
    }
  }
})
</script>

<style scoped>

</style>
