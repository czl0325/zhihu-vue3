<template>
  <div class="form-group">
    <label for="inputValue">{{ title }}</label>
    <input class="form-control" :class="{'is-invalid': inputRef.error}" id="inputValue" :value="inputRef.value" @blur="validateInput" @input="updateValue" v-bind="$attrs">
    <small id="emailHelp" class="form-text text-danger" v-if="inputRef.error">{{ inputRef.message }}</small>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, PropType, reactive} from 'vue'
import {emitter} from './ValidateForm.vue'

interface RuleType {
  type: 'required' | 'email' | 'custom';
  message: string;
  function: () => boolean;
}

const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

export type RulesProp = RuleType[]
export default defineComponent({
  name: "ValidateInput",
  props: {
    rules: Array as PropType<RuleType[]>,
    title: String,
    modelValue: String,
  },
  inheritAttrs: false,
  setup(props, context) {
    const inputRef = reactive({
      value: props.modelValue || '',
      error: false,
      message: ''
    })
    const validateInput = () => {
      if (props.rules) {
        const allPassed = props.rules.every(rule => {
          let passed = true
          inputRef.message = rule.message
          switch (rule.type) {
            case 'required':
              passed = inputRef.value.trim() !== ''
              break;
            case 'email':
              passed = emailReg.test(inputRef.value)
              break;
            case 'custom':
              passed = rule.function() || true
              break;
          }
          return passed
        })
        inputRef.error = !allPassed
        return allPassed
      }
      return true
    }
    const updateValue = (e: KeyboardEvent) => {
      const targetValue = (e.target as HTMLInputElement).value
      inputRef.value = targetValue
      context.emit("update:modelValue", targetValue)
    }
    onMounted(() => {
      emitter.emit('validate', validateInput)
    })
    return {
      inputRef,
      validateInput,
      updateValue
    }
  }
})
</script>

<style scoped>

</style>
