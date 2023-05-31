<script setup lang="ts">
import { useConfirm } from '@pkg/confirm'
const { confirm } = useConfirm()
const onConfirm = () => {
  confirm({
    message: 'Вы уверены?',
    onDone() {
      console.log('ok!')
    },
    onClose() {
      console.log('closed!')
    },
  })
}
// const onConfirm = () => { console.log('mde') }
</script>

<template>
  <button class="btn" @click="onConfirm">Confirm</button>
  <ConfirmComponent />
</template>

<style scoped>
.btn {
  background-color: rgb(176, 251, 226);
}
</style>
