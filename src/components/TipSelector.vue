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
          @click="$emit('tipSelection', option)"
        >
          {{ option }}%
        </button>
      </div>
    </div>
  </div>
</template>
