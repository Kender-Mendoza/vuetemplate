<script setup lang="ts">
defineProps({
  content: {
    type: String,
    required: true
  }
});

const emit = defineEmits <{
  (event: 'onClick'): void
}> ();

const onClick = () => {
  emit('onClick')
}
</script>

<template>
  <v-btn color="primary" elevation="4" large @click="onClick">
    {{ content }}
  </v-btn>
</template>
