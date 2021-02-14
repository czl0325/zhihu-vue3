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
          <dropdown-item class="dropdown-item" data-toggle="modal" @click.prevent="showAlert=true">退出登录</dropdown-item>
        </dropdown>
      </li>
    </ul>
    <alert :visible="showAlert" @cancel="showAlert=false" @confirm="onConfirm">
      <p>确定要退出登录?</p>
    </alert>
  </nav>
</template>

<script lang="ts">
import {computed, defineComponent, ref} from 'vue'
import Dropdown from "@/components/Dropdown.vue";
import DropdownItem from "@/components/DropdownItem.vue";
import {useStore} from "vuex";
import Alert from "@/components/Alert.vue";
import {useRouter} from 'vue-router'

export default defineComponent({
  name: "GlobalHeader",
  components: {
    Dropdown,
    DropdownItem,
    Alert
  },
  setup() {
    const store = useStore()
    const user = computed(() => store.state.user)
    const showAlert = ref(false)
    const router = useRouter()
    const onConfirm = () => {
      showAlert.value = false
      localStorage.removeItem('id')
      store.commit('updateUser', {})
      router.replace('/')
    }
    return {
      user,
      showAlert,
      onConfirm
    }
  }
})
</script>

<style scoped>

</style>
