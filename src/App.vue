<script setup>
import { ref, computed } from "vue";

const tipsOptions = [5, 10, 15, 20];
const bill = ref(null);
const numberOfPeople = ref(null);
const tipPercent = ref(null);
const formatter = new Intl.NumberFormat("pt-PT", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 2,
  minimumFractionDigits: 2,
});

const tipAmountPerPerson = computed(() => {
  const amount = (bill.value * (tipPercent.value / 100)) / numberOfPeople.value;
  return isNaN(amount) || !numberOfPeople.value ? 0 : amount;
});
const tipAmountPerPersonDisplay = computed(() => {
  return formatter.format(tipAmountPerPerson.value);
});

const totalAmountPerPerson = computed(() => {
  const amount =
    (bill.value * (tipPercent.value / 100 + 1)) / numberOfPeople.value;
  return isNaN(amount) || !numberOfPeople.value ? 0 : amount;
});
const totalAmountPerPersonDisplay = computed(() => {
  return formatter.format(totalAmountPerPerson.value);
});

const pageTitle = `Bill Splitter`;
const reset = () => {
  bill.value = null;
  numberOfPeople.value = null;
};
const setTipPercent = (value) => {
  tipPercent.value = tipPercent.value === value ? null : value;
};
</script>

<template>
  <h1 id="pageTitle">{{ pageTitle }}</h1>
  <article class="card">
    <div class="row">
      <div id="billForm" class="col">
        <label class="input">
          Bill
          <input type="number" v-model="bill" placeholder="0" />
        </label>
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
                :class="{ active: option === tipPercent }"
                @click="setTipPercent(option)"
              >
                {{ option }}%
              </button>
            </div>
          </div>
        </div>
        <label class="input">
          Number of People
          <input type="number" v-model="numberOfPeople" placeholder="0" />
        </label>
      </div>
      <div class="col">
        <div id="resultsContainer" class="card dark">
          <div id="outputValuesContainer">
            <div>
              <div class="outputLabel">Tip Amount <small>/ person</small></div>
              <div class="outputValue">{{ tipAmountPerPersonDisplay }}</div>
            </div>
            <div>
              <div class="outputLabel">Total <small>/ person</small></div>
              <div class="outputValue">{{ totalAmountPerPersonDisplay }}</div>
            </div>
          </div>
          <button id="resetButton" type="button" @click="reset">Reset</button>
        </div>
      </div>
    </div>
  </article>
</template>
