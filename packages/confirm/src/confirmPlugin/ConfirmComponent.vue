<script setup lang="ts">
import { useConfirmWrapper } from './useConfirmWrapper'
const { ConfirmsStore } = useConfirmWrapper()
</script>

<template>
  <div class="popup" v-for="(popup, i) in ConfirmsStore" :key="i">
    <div class="popup__header">
      <span>{{ popup.message }}</span>
    </div>
    
    <div class="buttons">
      <button class="btn" @click="popup.onDone">Да</button>
      <button class="btn" @click="popup.onClose">Отмена</button>
    </div>
  </div>
</template>

<style scoped>
.popup {
  width: fit-content;
  padding: 8px;
  border: 1px solid rgb(165, 163, 163);
  border-radius: 6px;
  margin: 8px auto;
}

.popup__header {
  margin-bottom: 8px;
}

.popup .btn {
  margin: 0 4px;
}
</style>
