<template>
  <validate-form @form-submit="onFormSubmit">
    <validate-input :rules="emailRules" title="电子邮箱" v-model="emailRef"  placeholder="请输入电子邮箱"></validate-input>
    <validate-input :rules="pwdRules" title="密    码" v-model="pwdRef"  placeholder="请输入密码" type="password"></validate-input>
  </validate-form>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'
import GlobalHeader from "@/components/GlobalHeader.vue";
import ValidateForm from "@/components/ValidateForm.vue";
import ValidateInput from "@/components/ValidateInput.vue";
import {useRouter} from "vue-router";

export default defineComponent({
  name: "Login",
  components: {
    GlobalHeader,
    ValidateForm,
    ValidateInput
  },
  setup() {
    const emailRules = [
      {type: 'required', message: '电子邮箱不能为空!'},
      {type: 'email', message: '电子邮箱格式错误!'},
    ]
    const pwdRules = [
      {type: 'required', message: '密码不能为空!'}
    ]
    const emailRef = ref('')
    const pwdRef = ref('')
    const router = useRouter()
    const onFormSubmit = (value: boolean) => {
      if (value) {
        router.push({name: 'home'})
      }
    }
    return {
      emailRules,
      pwdRules,
      emailRef,
      pwdRef,
      onFormSubmit
    }
  }
})
</script>

<style scoped>

</style>
