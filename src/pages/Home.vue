<template>
  <div>
    <column-list :list="columnList" @click="onTap"></column-list>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from 'vue'
import ColumnList, {ColumnProps} from "@/components/ColumnList.vue";
import createToast from "@/hooks/CreateToast";
import {getColumnList, getUserById} from '@/web/WebManager'
import axios from "axios";

export default defineComponent({
  name: "Home",
  components: {
    ColumnList,
  },
  setup() {
    const onTap = () => {
      createToast('测试弹框', 'success')
    }
    const columnList = ref<ColumnProps[]>([])
    onMounted(() => {
      getColumnList().then(res=>{
        columnList.value = res.data
      })
      getUserById(1).then(res=>{
        console.log(res)
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
