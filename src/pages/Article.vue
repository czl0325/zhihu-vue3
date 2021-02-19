<template>
  <div class="container-fluid">
    <div class="card w-75 mx-auto d-flex flex-row justify-content-between align-items-center" v-if="author">
      <img :src="author.avatar_url" style="width: 200px; height: 200px;object-fit: cover;">
      <div class="d-flex flex-column flex-grow-1 ms-2 justify-content-center" style="height: 200px;">
        <div class="d-flex flex-row align-items-center">
          <h4>{{ author.name }}</h4>
        </div>
        <div class="mt-2">
          <span>{{ author.headline }}</span>
        </div>
      </div>
    </div>
    <div class="card mt-3 w-75 mx-auto">
      <div v-for="item in articles" :key="item.id" class="p-3 border-bottom">
        <router-link to="detail" class="text-primary" style="font-size: 18px;">{{item.title}}</router-link>
        <div class="d-flex my-2">
          <img :src="item.image_url" v-if="item.image_url" class="w-25 me-2" style="height: 150px;">
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
import {ArticleProps, AuthorProps} from '@/model/model'

export default defineComponent({
  name: "Article",
  setup() {
    const articles = ref<ArticleProps[]>([])
    const author = ref<AuthorProps|null>(null)
    onMounted(() => {
      getArticleList().then(res=> {
        articles.value = res.data
        if (articles.value.length > 0) {
          const article = articles.value[0]
          author.value = article.author
        }
      })
    })
    return {
      articles,
      author
    }
  }
})
</script>

<style scoped>

</style>
