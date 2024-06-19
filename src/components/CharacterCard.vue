<template>
  <div class="text-start">
    <img :src="imageUrl" alt="" class="w-full mb-4">
    <h3 class="font-old font-[900] text-[42px]">{{ name }}</h3>
    <p class="text-[24px]">{{ description }}</p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  name: String,
  description: String,
  imageUrl: String
});
</script>

<style scoped>
/* Добавьте дополнительные стили здесь */
</style>