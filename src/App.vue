<script setup>
import { ref } from 'vue'
const isOpen = ref(false)
</script>

<template>
  <MyModal v-model:show="isOpen">
    <template #header>App.vue的header</template>
    <template #default>App.vue的content</template>
  </MyModal>

  <!-- Button trigger modal -->
  <button type="button" class="btn btn-primary" @click="isOpen = true">
    打開 Modal
  </button>
</template>

<style scoped></style>
