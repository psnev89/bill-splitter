<script setup>
defineProps({
  label: String,
  labelHint: String,
  value: String,
});
</script>

<template>
  <article>
    <div class="outputLabel">
      {{ label }} <small>{{ labelHint }}</small>
    </div>
    <div class="outputValue">{{ value }}</div>
  </article>
</template>

<style scoped>
.outputLabel {
  color: var(--color-white);
  text-align: left;
  font-weight: bold;
}
.outputLabel small {
  color: var(--color-output);
  font-weight: normal;
}
.outputValue {
  text-align: right;
  color: var(--color-output);
  font-size: 26pt;
}
</style>
