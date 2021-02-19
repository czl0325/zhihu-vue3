<template>
  <div class="container-fluid">
    <div class="d-flex flex-row w-75 mx-auto">
      <img :src="detail.avatarUrl">
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from 'vue'
import {getArticleDetail} from "@/web/WebManager";

export default defineComponent({
  name: "Detail",
  setup() {
    const detail = ref({})
    onMounted(() => {
      getArticleDetail().then(res=> {

      })
    })
    return {
      detail
    }
  }
})
</script>

<style scoped>

</style>
