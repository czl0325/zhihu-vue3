<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between mb-4 px-3">
    <a class="navbar-brand">知乎专栏</a>
    <ul v-if="!user.isLogin" class="list-inline mb-0">
      <li class="list-inline-item"><router-link class="btn btn-outline-light my-2" :to="{name: 'login'}">登录</router-link></li>
      <li class="list-inline-item"><router-link class="btn btn-outline-light my-2" :to="{name: 'login'}">注册</router-link></li>
    </ul>
    <ul v-else class="list-inline mb-0">
      <li class="list-inline-item">
        <dropdown :title="`您好 ${user.name}`">
          <dropdown-item class="dropdown-item">新建文章</dropdown-item>
          <dropdown-item class="dropdown-item">编辑资料</dropdown-item>
          <dropdown-item disabled class="dropdown-item">退出登录</dropdown-item>
        </dropdown>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue'
import Dropdown from "@/components/Dropdown.vue";
import DropdownItem from "@/components/DropdownItem.vue";
import {UserProps} from "@/model/model";

export default defineComponent({
  name: "GlobalHeader",
  props: {
    user: {
      type: Object as PropType<UserProps>
    }
  },
  components: {
    Dropdown,
    DropdownItem
  }
})
</script>

<style scoped>

</style>
