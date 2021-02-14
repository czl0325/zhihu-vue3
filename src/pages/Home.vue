<template>
  <div>
    <column-list :list="columnList"></column-list>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from 'vue'
import ColumnList, {ColumnProps} from "@/components/ColumnList.vue";
import createToast from "@/hooks/CreateToast";
import {getColumnList, getUserById} from '@/web/WebManager'

export default defineComponent({
  name: "Home",
  components: {
    ColumnList,
  },
  setup() {
    const columnList = ref<ColumnProps[]>([])
    onMounted(() => {
      getColumnList().then(res=>{
        columnList.value = res.data
      })
    })
    return {
      columnList
    }
  }
})
</script>

<style scoped>

</style>
