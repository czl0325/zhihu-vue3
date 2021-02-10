<template>
  <teleport >

  </teleport>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
const MessageType: string = 'success' | 'error' | 'default';

export default defineComponent({
  name: "Toast",
  props: {
    message: String,
    type: {
      type: MessageType,
      default: 'default'
    }
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