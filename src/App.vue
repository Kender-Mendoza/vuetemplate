<script setup lang="ts">
import ButtonComponent from '@/components/shared/ButtonComponent.vue'

const onClick = () => {
  console.log("Hola como estas")
}
</script>

<template>
  <ButtonComponent :content="'Esto es una prueba'" @on-click="onClick"></ButtonComponent>
</template>

<style scoped>
</style>
