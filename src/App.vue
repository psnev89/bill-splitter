<script setup>
import { ref, computed } from "vue";
import AppInput from "./components/AppInput.vue";
import TipSelector from "./components/TipSelector.vue";
import ValueDisplay from "./components/ValueDisplay.vue";
import AppCard from "./components/AppCard.vue";

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
</script>

<template>
  <h1 id="pageTitle">{{ pageTitle }}</h1>
  <AppCard>
    <div class="row">
      <div id="billForm" class="col">
        <AppInput label="Bill" v-model="bill"></AppInput>

        <TipSelector v-model="tipPercent" :tips-options="tipsOptions">
        </TipSelector>

        <AppInput label="Number of People" v-model="numberOfPeople"></AppInput>
      </div>
      <div class="col">
        <AppCard id="resultsContainer" dark>
          <div id="outputValuesContainer">
            <ValueDisplay
              label="Tip Amount"
              label-hint="/ person"
              :value="tipAmountPerPersonDisplay"
            ></ValueDisplay>
            <ValueDisplay
              label="Total"
              label-hint="/ person"
              :value="totalAmountPerPersonDisplay"
            ></ValueDisplay>
          </div>
          <button id="resetButton" type="button" @click="reset">Reset</button>
        </AppCard>
      </div>
    </div>
  </AppCard>
</template>
