<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between mb-4 px-3">
    <a class="navbar-brand">知乎专栏</a>
    <ul v-if="!user.id" class="list-inline mb-0">
      <li class="list-inline-item"><router-link class="btn btn-outline-light my-2" :to="{name: 'login'}">登录</router-link></li>
      <li class="list-inline-item"><router-link class="btn btn-outline-light my-2" :to="{name: 'register'}">注册</router-link></li>
    </ul>
    <ul v-else class="list-inline mb-0">
      <li class="list-inline-item">
        <dropdown :title="`您好 ${user.userName}`">
          <dropdown-item class="dropdown-item">新建文章</dropdown-item>
          <dropdown-item class="dropdown-item">编辑资料</dropdown-item>
          <dropdown-item class="dropdown-item">退出登录</dropdown-item>
        </dropdown>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import {computed, defineComponent} from 'vue'
import Dropdown from "@/components/Dropdown.vue";
import DropdownItem from "@/components/DropdownItem.vue";
import {useStore} from "vuex";

export default defineComponent({
  name: "GlobalHeader",
  components: {
    Dropdown,
    DropdownItem
  },
  setup() {
    const store = useStore()
    const user = computed(() => store.state.user)
    return {
      user
    }
  }
})
</script>

<style scoped>

</style>
