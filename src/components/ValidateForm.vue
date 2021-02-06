<template>
  <form class="validate-form-container">
    <slot name="default"></slot>
    <div class="submit-area" @click.prevent="submitForm">
      <slot name="submit">
        <button type="submit" class="btn btn-primary mt-3">提交</button>
      </slot>
    </div>
  </form>
</template>

<script lang="ts">
import {defineComponent, onUnmounted} from 'vue'
import mitt, {Handler, Emitter} from "mitt";
export const emitter: Emitter = mitt();
type ValidateFunc = () => boolean;

export default defineComponent({
  name: "ValidateForm",
  emits: ['form-submit'],
  setup(props, context) {
    let validateArr:ValidateFunc[] = []
    const submitForm = () => {
      const result = validateArr.map(func => { return func() }).every(res => res)
      context.emit('form-submit', result)
    }
    const callback = (func: ValidateFunc) => {
      validateArr.push(func)
    }
    emitter.on('validate', callback as Handler<ValidateFunc>)
    onUnmounted(() => {
      emitter.off('validate', callback as Handler<ValidateFunc>)
      validateArr = []
    })
    return {
      submitForm
    }
  }
})
</script>

<style scoped>

</style>
