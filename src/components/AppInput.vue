<script setup>
const props = defineProps({
  type: {
    type: String,
    default: "number",
  },
  placeholder: {
    type: Number,
    default: 0,
  },
  label: {
    type: String,
    default: "",
  },
  modelValue: [String, Number],
});
const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <label class="input">
    <slot name="label">{{ label }}</slot>
    <input
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      @input="emit('update:modelValue', $event.target.value)"
    />
  </label>
</template>

<style scoped>
label input {
  margin: 8px 0 0 0;
  position: relative;
  display: block;
  border: none;
  text-align: end;
  font-family: var(--font);
  height: 50px;
  background-color: var(--color-hover);
  border-radius: 4px;
  color: var(--color-dark);
  font-size: large;
  font-weight: bold;
  width: 100%;
  box-sizing: border-box;
  padding: 0 20px;
}
label input:focus {
  outline: 2px solid var(--color-bg);
}
label input::placeholder {
  color: var(--color-output);
}
/* Hide number input arrows */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
