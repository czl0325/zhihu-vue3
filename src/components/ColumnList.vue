<template>
  <ul class="row">
    <li
        class="col-3 mb-5"
        style="overflow: hidden"
        v-for="column in columnList"
        :key="column.id"
    >
      <div class="card h-100 shadow-sm">
        <img class="card-img-top" style="height: 40%;" :src="column.avatar" :alt="column.title"/>
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
  id: number;
  title: string;
  avatar?: string;
  description: string;
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
        if (!column.avatar) {
          column.avatar = require('@/assets/loading.jpg')
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
