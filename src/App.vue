<template>
  <router-view v-slot="{ Component }">
    <Transition name="fade" mode="out-in">
      <component :is="Component" />
    </Transition>
  </router-view>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped></style>
