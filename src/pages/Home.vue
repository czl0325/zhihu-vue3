<template>
  <div>
    <file-upload></file-upload>
    <column-list :list="columnList" @click="onTap"></column-list>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from 'vue'
import ColumnList, {ColumnProps} from "@/components/ColumnList.vue";
import createToast from "@/hooks/CreateToast";
import FileUpload from "@/components/FileUpload.vue";
import {getColumnList} from '../web/WebManager'

export default defineComponent({
  name: "Home",
  components: {
    ColumnList,
    FileUpload
  },
  setup() {
    const onTap = () => {
      createToast('测试弹框', 'success')
    }
    const columnList = ref<ColumnProps[]>([])
    onMounted(() => {
      getColumnList().then(res=>{
        columnList.value = res.data.data.data
      })
    })
    return {
      columnList,
      onTap
    }
  }
})
</script>

<style scoped>

</style>
