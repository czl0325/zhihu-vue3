<template>
  <validate-form @form-submit="onFormSubmit">
    <validate-input class="mt-3" :rules="emailRules" title="电子邮箱" v-model="emailRef"  placeholder="请输入电子邮箱"></validate-input>
    <validate-input class="mt-3" :rules="pwdRules" title="密    码" v-model="pwdRef"  placeholder="请输入密码" type="password"></validate-input>
  </validate-form>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'
import ValidateForm from "@/components/ValidateForm.vue";
import ValidateInput from "@/components/ValidateInput.vue";
import {useRouter} from "vue-router";
import {useStore} from "vuex";
import {login} from "@/web/WebManager";

export default defineComponent({
  name: "Login",
  components: {
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
    const store = useStore()
    const onFormSubmit = (value: boolean) => {
      if (value) {
        login(emailRef.value, pwdRef.value).then(res=>{
          store.commit('updateUser', res)
          localStorage.setItem('id', res.id)
          router.push('/')
        })
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
