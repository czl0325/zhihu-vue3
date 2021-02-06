<template>
<!--  <teleport to="#back">-->
    <div class="d-flex justify-content-center align-items-center h-100 w-100">
      <div class="loading-content">
        <div class="spinner-border text-primary" role="status">
        </div>
        <p>加载中...</p>
      </div>
    </div>
<!--  </teleport>-->
</template>

<script lang="ts">
import {defineComponent} from 'vue'


export default defineComponent({
  name: "Loading",
  props: {
    text: String
  },
  setup() {

  }
})
</script>

<style scoped>
.loading-content {
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 100;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  line-height: 100vh;
  text-align: center;
}
</style>
