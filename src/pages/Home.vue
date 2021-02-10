<template>
  <div>
    <column-list :list="list" @click="onTap"></column-list>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import ColumnList, {ColumnProps} from "@/components/ColumnList.vue";
import store from "@/store";
import createToast from "@/hooks/CreateToast";

const testData: ColumnProps[] = [
  {
    id: 1,
    title: '专栏1',
    description: '这是专栏1',
    avatar: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwx4.sinaimg.cn%2Flarge%2F007s9uFmgy1gn7wnixsccj30k00aijrn.jpg&refer=http%3A%2F%2Fwx4.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614747631&t=5c5e2ffc44d0dfa3af13b7f4e0c6e12e'
  },
  {id: 2, title: '专栏2', description: '这是专栏2'}
]

export default defineComponent({
  name: "Home",
  components: {
    ColumnList,
  },
  setup() {
    const onTap = () => {
      createToast('测试弹框', 'success')
    }
    return {
      list: testData,
      onTap
    }
  }
})
</script>

<style scoped>

</style>
