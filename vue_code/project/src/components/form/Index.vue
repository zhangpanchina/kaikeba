<template>
  <div>
    <Form ref="form" :model="model" :rules="rules">
      <FormItem label="姓名：" prop="username">
        <Input v-model="model.username" placeholder="请输入" />
      </FormItem>
      <FormItem label="密码：" prop="password">
        <Input type="password" v-model="model.password" placeholder="请输入" />
        <FormItem>
          <button @click="onLogin">登陆</button>
        </FormItem>
      </FormItem>
    </Form>
  </div>
</template>

<script>
import Form from "./Form";
import FormItem from "./FormItem";
import Input from "./Input";
import Notice from './Notice'
export default {
  components: {
    Input,
    FormItem,
    Form
  },
  data() {
    return {
      model: {
        username: "",
        password: ""
      },
      rules: {
        username: [{ required: true, message: "请输入用户名" }]
        // password: [{ required: true, message: '请输入密码' }]
      }
    };
  },
  methods: {
    onLogin() {
      this.$refs.form.validate(res => {
        if (res) {
          alert("success");
        } else {
          this.$create(Notice, {
            title: "校验失败",
            message: "校验错误，请重试！"
          }).show();
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>
