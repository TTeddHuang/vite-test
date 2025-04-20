<script setup>
import { ref } from 'vue'
const isOpen = ref(false)
</script>

<template>
  <MyModal :show="isOpen"></MyModal>

  <!-- Button trigger modal -->
  <button type="button" class="btn btn-primary" @click="isOpen = true">
    打開 Modal
  </button>
</template>

<style scoped></style>
