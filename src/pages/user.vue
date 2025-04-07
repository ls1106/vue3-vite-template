<template>
  <span class="title">1111</span>

  <div>姓名：{{ userInfo.name }} 年龄：{{ userInfo.age }}</div>
  <div>getter值：{{ newName }}</div>
  <el-button type="success" @click="handleUser">更新用户</el-button>
  <button @click="handleAge">更新年龄</button>
  <el-icon color="#000" size="22">
    <Expand />
  </el-icon>

  <Test />
  <MyForm />
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia"
import { useUserStore } from "@/store/user"

const userStore = useUserStore()

//storeToRefs 会跳过所有的 action 属性
const { userInfo, newName } = storeToRefs(userStore)

//action 属性直接解构
const { updateUserInfo, updateAge } = userStore

const handleUser = () => {
  updateUserInfo({ name: "kebo", age: 24 })
}

const handleAge = () => {
  updateAge(userInfo.value.age + 1)
}
</script>
<style lang="scss" scoped>
.title {
  color: $test-color;
}
</style>
