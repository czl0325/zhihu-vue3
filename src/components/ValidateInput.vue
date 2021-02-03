<template>
  <div class="form-group">
    <label for="inputValue">{{ title }}</label>
    <input class="form-control" :class="{'is-invalid': inputRef.error}" id="inputValue" v-model="inputRef.value" @blur="validateInput" >
    <small id="emailHelp" class="form-text text-danger" v-if="inputRef.error">{{ inputRef.message }}</small>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType, reactive} from 'vue'

interface RuleType {
  type: 'required' | 'email' | 'range';
  message: string;
}

const emailReg = /^[A-Za-zd0-9]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/;

export type RulesProp = RuleType[]
export default defineComponent({
  name: "ValidateInput",
  props: {
    rules: {
      type: Array as PropType<RuleType[]>,
    },
    title: String
  },
  setup(props) {
    const inputRef = reactive({
      value: '',
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
          }
          return passed
        })
        inputRef.error = !allPassed
      }
    }
    return {
      inputRef,
      validateInput
    }
  }
})
</script>

<style scoped>

</style>
