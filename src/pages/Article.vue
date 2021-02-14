<template>
  <div class="container-fluid">
    <div class="card">
      <h2>标题</h2>
    </div>
    <div class="card mt-3 w-75 mx-auto">
      <div v-for="item in articles" :key="item.id" class="p-3 border-bottom">
        <router-link to="detail" class="text-primary" style="font-size: 18px;">{{item.title}}</router-link>
        <div class="d-flex my-2">
          <img :src="item.image_url" v-if="item.image_url" class="w-25 me-2">
          <div class="flex-grow-1" v-html="item.excerpt"></div>
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <span>{{item.comment_count}}条评论</span>
          <router-link to="`/detail/${item.id}}`" class="btn btn-primary">编辑</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from 'vue'
import {getArticleList} from '@/web/WebManager'
import {ArticleProps} from '@/model/model'

export default defineComponent({
  name: "Article",
  setup() {
    const articles = ref<ArticleProps[]>([])
    onMounted(() => {
      getArticleList().then(res=> {
        articles.value = res.data
      })
    })
    return {
      articles
    }
  }
})
</script>

<style scoped>

</style>
