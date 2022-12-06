<script setup>
defineProps({
  dark: {
    type: Boolean,
    default: false,
  },
});
</script>
<template>
  <article :class="['card', { dark: dark }]">
    <slot></slot>
  </article>
</template>

<style scoped>
.card {
  background-color: var(--card-color-light);
  border-radius: var(--card-border-radius);
  padding: var(--card-padding);
  overflow: hidden;
}

.card.dark {
  background-color: var(--card-color-dark);
}
</style>
