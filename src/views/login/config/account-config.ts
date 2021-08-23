export const loginAccountRules = {
  name: [
    {
      required: true,
      message: "用户名必填",
      trigger: "blur",
    },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: "5-10",
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      message: "密码必填",
      trigger: "blur",
    },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: "3以上",
      trigger: "blur",
    },
  ],
};
