<script setup>
defineProps({
  tipsOptions: {
    type: Array,
    validator: (val) => val?.every?.((tip) => !isNaN(tip)),
  },
  modelValue: {
    type: Number,
    validator: (val) => !isNaN(val) || val == null,
  },
});

defineEmits(["update:modelValue", "tipSelection"]);
</script>

<template>
  <div>
    <div id="tipSelectorTitle">Tip %</div>
    <div id="tipSelector" class="row">
      <div
        v-for="(option, index) in tipsOptions"
        :key="`tip-${index}`"
        class="col"
      >
        <button
          type="button"
          :class="{ active: option === modelValue }"
          @click="
            $emit('update:modelValue', option === modelValue ? null : option)
          "
        >
          {{ option }}%
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
#tipSelector {
  margin-top: 8px;
  flex-wrap: wrap;
}
#tipSelector button {
  width: 100%;
  background-color: var(--color-dark);
  border: 0;
  border-radius: 4px;
  height: 40px;
  color: var(--color-white);
  font-family: var(--font);
  font-size: larger;
  font-weight: bold;
  cursor: pointer;
}
#tipSelector button:hover,
#tipSelector button.active {
  background-color: var(--color-bg);
}

#tipSelectorTitle {
  display: block;
  position: relative;
  text-align: left;
  font-size: small;
  font-weight: bold;
  color: var(--card-color-dark);
}
</style>
