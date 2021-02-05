<template>
  <div class="container">
    <GlobalHeader :user="user"/>
    <validate-form @form-submit="onFormSubmit">
      <validate-input :rules="emailRules" title="电子邮箱" v-model="emailRef"  placeholder="请输入电子邮箱"></validate-input>
      <validate-input :rules="pwdRules" title="密    码" v-model="pwdRef"  placeholder="请输入密码" type="password"></validate-input>
      <template v-slot:submit>
        <button type="submit" class="btn btn-danger mt-2">重新提交</button>
      </template>
    </validate-form>

  </div>
</template>

<script lang="ts">
import {defineComponent, reactive, ref} from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumnList, {ColumnProps} from './components/ColumnList.vue';
import GlobalHeader, {UserProps} from "@/components/GlobalHeader.vue";
import ValidateInput from "@/components/ValidateInput.vue";
import ValidateForm from "@/components/ValidateForm.vue";

const testData: ColumnProps[] = [
  {
    id: 1,
    title: '专栏1',
    description: '这是专栏1',
    avatar: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwx4.sinaimg.cn%2Flarge%2F007s9uFmgy1gn7wnixsccj30k00aijrn.jpg&refer=http%3A%2F%2Fwx4.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614747631&t=5c5e2ffc44d0dfa3af13b7f4e0c6e12e'
  },
  {id: 2, title: '专栏2', description: '这是专栏2'}
]
const currentUser: UserProps = {
  isLogin: true,
  name: '陈昭良'
}

export default defineComponent({
  name: 'App',
  components: {
    ColumnList,
    GlobalHeader,
    ValidateInput,
    ValidateForm
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
    const onFormSubmit = (value: string) => {
      console.log(value)
    }
    return {
      list: testData,
      user: currentUser,
      emailRules,
      pwdRules,
      emailRef,
      pwdRef,
      onFormSubmit
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
