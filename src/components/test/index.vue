<template>
  <div>test</div>
</template>

<script setup lang="ts">
import { getUserList } from "@/api/user"

onMounted(async () => {
  const { data } = await getUserList({
    id: 1,
    name: "kebo",
    age: 18
  })
  console.log("list>>>>>", data.data.list)
})
</script>
<style lang="scss" scoped></style>
