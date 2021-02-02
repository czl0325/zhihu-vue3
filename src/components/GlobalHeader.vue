<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between mb-4 px-3">
    <a class="navbar-brand">知乎专栏</a>
    <ul v-if="!user.isLogin" class="list-inline mb-0">
      <li class="list-inline-item"><a class="btn btn-outline-light my-2">登录</a></li>
      <li class="list-inline-item"><a class="btn btn-outline-light my-2">注册</a></li>
    </ul>
    <ul v-else class="list-inline mb-0">
      <li class="list-inline-item">
        <div class="dropdown">
          <button class="btn btn-outline-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            您好 {{user.name}}
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </div>
      </li>
    </ul>

  </nav>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue'
export interface UserProps {
  isLogin: boolean;
  id?: number;
  name?: string;
}
export default defineComponent({
  name: "GlobalHeader",
  props: {
    user: {
      type: Object as PropType<UserProps>
    }
  }
})
</script>

<style scoped>

</style>
