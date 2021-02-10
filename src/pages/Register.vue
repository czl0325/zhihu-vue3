<template>
  <validate-form class="container-fluid" @form-submit="onSubmit">
    <validate-input title="用户名" :rules="userRules" v-model="userInfo.nickName"></validate-input>
    <validate-input title="邮箱" :rules="emailRules" v-model="userInfo.email"></validate-input>
    <validate-input title="密码" :rules="pwd1Rules" v-model="userInfo.password1"></validate-input>
    <validate-input title="再次输入密码" :rules="pwd2Rules" v-model="userInfo.password2"></validate-input>
  </validate-form>
</template>

<script lang="ts">
import {defineComponent, reactive} from 'vue'
import ValidateForm from "@/components/ValidateForm.vue";
import ValidateInput from "@/components/ValidateInput.vue";

export default defineComponent({
  name: "Register",
  components: {
    ValidateForm,
    ValidateInput
  },
  setup() {
    const userInfo = reactive({
      nickName: '',
      email: '',
      password1: '',
      password2: ''
    })
    const userRules = [{ type: 'required', message: '用户名必填' }]
    const emailRules = [{ type: 'required', message: '邮箱必填'}, {type: 'email', message: '邮箱格式错误'}]
    const pwd1Rules = [{ type: 'required', message: '密码必填' }]
    const pwd2Rules = [{ type: 'custom', message: '密码不相同', function: () => {return userInfo.password1 === userInfo.password2} }]
    const onSubmit = (result: boolean) => {

    }
    return {
      userInfo,
      userRules,
      emailRules,
      pwd1Rules,
      pwd2Rules,
      onSubmit
    }
  }
})
</script>

<style scoped>

</style>
