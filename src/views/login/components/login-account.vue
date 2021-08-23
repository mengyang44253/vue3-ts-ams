<template>
  <div class="login-account">
    <el-form
      status-icon
      label-width="60px"
      :rules="loginAccountRules"
      :model="account"
      ref="ruleForm"
    >
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input show-password v-model="account.password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { loginAccountRules } from "../config/account-config";
import { ElForm } from "element-plus";
import localCache from "@/utils/cache";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();

    const account = reactive({
      name: localCache.getCache("name") ?? "",
      password: localCache.getCache("password") ?? "",
    });
    const ruleForm = ref<InstanceType<typeof ElForm>>();

    const loginAction = (isKeepPassword: boolean) => {
      ruleForm.value?.validate((valid) => {
        console.log(valid);
        if (valid) {
          //判断是否需要记住密码
          console.log(111);
          if (isKeepPassword) {
            //本地缓存
            localCache.setCache("name", account.name);
            localCache.setCache("password", account.password);
          } else {
            localCache.deleteCache("name");
            localCache.deleteCache("password");
          }

          //开始进行登录验证
          store.dispatch("login/accountLoginAction", { ...account });
        } else {
          return false;
        }
      });
    };

    return {
      account,
      loginAccountRules,
      loginAction,
      ruleForm,
    };
  },
});
</script>

<style scoped></style>
