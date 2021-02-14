<template>
  <ul class="row">
    <li
        class="col-3 mb-5"
        style="overflow: hidden"
        v-for="column in columnList"
        :key="column.id"
    >
      <div class="card h-100 shadow-sm">
        <img class="card-img-top" style="height: 40%;" :src="column.image_url" :alt="column.title"/>
        <div class="card-body text-center">
          <h5 class="card-title">{{ column.title }}</h5>
          <p class="card-text text-left">{{ column.description }}</p>
          <a href="#" class="btn btn-outline-primary">进入专栏</a>
        </div>
      </div>
    </li>
  </ul>
</template>
<script lang="ts">
import {computed, defineComponent, PropType} from "vue";

export interface ColumnProps {
  updated: number,
  description: string,
  column_type: string,
  url: string,
  title: string,
  comment_permission: string,
  created: number,
  accept_submission: boolean,
  intro: string,
  image_url: string,
  type: string,
  followers: number,
  url_token: string,
  id: string,
  articles_count: number
}

export default defineComponent({
  name: "ColumnList",
  props: {
    list: {
      type: Array as PropType<ColumnProps[]>,
      required: true,
    },
  },
  setup(props) {
    const columnList = computed(() => {
      return props.list.map(column => {
        if (!column.image_url) {
          column.image_url = require('@/assets/loading.jpg')
        }
        return column
      })
    })
    return {
      columnList
    }
  },
});
</script>
<style scoped>
</style>
