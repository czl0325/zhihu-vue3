<template>
  <div class="container-fluid">
    <GlobalHeader :user="user"></GlobalHeader>
    <router-view></router-view>
    <footer class="navbar fixed-bottom navbar-light bg-light">
      <a class="navbar-brand" href="#">作者：陈昭良</a>
    </footer>
  </div>
  <loading></loading>
</template>

<script lang="ts">
import {defineComponent, reactive} from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import GlobalHeader from "@/components/GlobalHeader.vue";
import store from "@/store";
import Loading from "@/components/Loading.vue";

export default defineComponent({
  name: 'App',
  components: {
    GlobalHeader,
    Loading
  },
  setup() {
    const user = store.state.user
    return {
      user
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
