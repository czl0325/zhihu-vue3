<template>
  <teleport to="#toast">
    <div class="alert text-center w-50 fixed-bottom mb-5 mx-auto" :class="classObject">
      {{message}}
    </div>
  </teleport>
</template>

<script lang="ts">
import {defineComponent, PropType, ref} from 'vue'
import UserCreateDom from '../hooks/UserCreateDom'

export type ToastType = 'success' | 'error' | 'default';

export default defineComponent({
  name: "Toast",
  props: {
    message: String,
    type: {
      type: String as PropType<ToastType>,
      default: 'default'
    }
  },
  emits: ['dismiss'],
  setup(props) {
    UserCreateDom('toast')
    const classObject = {
      'alert-success': props.type === 'success',
      'alert-danger': props.type === 'error',
      'alert-dark': props.type === 'default'
    }
    return {
      classObject
    }
  }
})
</script>

<style scoped>

</style>
