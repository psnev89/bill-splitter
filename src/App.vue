<script setup>
import { computed } from "vue";
import AppInput from "./components/AppInput.vue";
import TipSelector from "./components/TipSelector.vue";
import ValueDisplay from "./components/ValueDisplay.vue";
import AppCard from "./components/AppCard.vue";
import { useTips } from "./hooks/useTips";
import { useBill } from "./hooks/useBill";
import { useFormatters } from "./hooks/useFormatters";

const { tipsOptions } = useTips();
const { tip, numberOfPeople, bill, tipAmountPerPerson, totalAmountPerPerson } =
  useBill();

const { formatCurrency } = useFormatters();
const tipAmountPerPersonDisplay = computed(() => {
  return formatCurrency(tipAmountPerPerson.value);
});
const totalAmountPerPersonDisplay = computed(() => {
  return formatCurrency(totalAmountPerPerson.value);
});

const pageTitle = `Bill Splitter`;

const reset = () => {
  bill.value = null;
  tip.value = null;
  numberOfPeople.value = null;
};
</script>

<template>
  <h1 id="pageTitle">{{ pageTitle }}</h1>
  <AppCard>
    <div id="mainContent" class="row">
      <div id="billForm" class="col">
        <AppInput label="Bill" v-model="bill"></AppInput>

        <TipSelector v-model="tip" :tips-options="tipsOptions"> </TipSelector>

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
