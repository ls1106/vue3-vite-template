module.exports = {
  root: true, // true, 不会再往父级目录找.eslintrc.js文件了
  // 环境配置
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true
  },
  // 扩展rules规则配置
  extends: [
    // eslint推荐规则
    "eslint:recommended",
    // 对.vue 文件代码进行规则检查
    "plugin:vue/vue3-recommended",
    // 对ts语法进行规则检查
    "plugin:@typescript-eslint/recommended",
    // prettier推荐规则
    // plugin:prettier/recommended作用：
    // 1.继承.prettierrc.js文件规则
    // 2.开启rules的 "prettier/prettier": "error"
    // 3.eslint fix的同时执行prettier格式化
    "plugin:prettier/recommended",
    "prettier" // 它是 "eslint-config-prettier"的缩写，解决eslint和prettier冲突
  ],
  // 解析器
  parser: "vue-eslint-parser",
  // 解析器选项配置
  parserOptions: {
    ecmaVersion: "latest", // 指定ES的版本，默认es5
    parser: "@typescript-eslint/parser",
    sourceType: "module", // 指定源代码存在的位置
    ecmaFeatures: {
      // 指定使用其它语言
      jsx: true
    }
  },
  plugins: ["vue", "@typescript-eslint", "prettier"], // 对应 eslint-plugin-vue、@typescript-eslint/eslint-plugin、eslint-plugin-prettier的缩写
  rules: {
    // 0: off 1: warn 2: error
    "vue/multi-word-component-names": 0, // 关闭.vue文件必须大驼峰方式或“-”命名
    "@typescript-eslint/no-explicit-any": 0, // 允许使用any
    "@typescript-eslint/ban-ts-ignore": 0,
    "@typescript-eslint/no-unused-vars": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/no-empty-function": 0,
    "@typescript-eslint/no-use-before-define": 0,
    "@typescript-eslint/ban-types": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "@typescript-eslint/ban-ts-comment": 0, // 允许使用@ts-ignore
    "@typescript-eslint/no-non-null-assertion": 0, // 允许使用非空断言
    "@typescript-eslint/no-this-alias": [
      2,
      {
        allowedNames: ["that"] // this可用的局部变量名称
      }
    ],
    "prettier/prettier": 0,
    "no-console": 1, // 警告有console.log
    "no-debugger": 1, // 警告有debugger
    "no-const-assign": 2, // 禁止修改const声明的变量
    "no-var": 2, // 禁用var，用let和const代替
    "no-undef": 0, // 允许有未定义的变量(解决自动引入onMounted报错)
    "no-multiple-empty-lines": 1 // 警告出现多个空行
  },
  globals: {
    defineProps: "readonly",
    defineEmits: "readonly",
    defineExpose: "readonly",
    withDefaults: "readonly"
  }
}
