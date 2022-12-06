import { ref, computed } from "vue";
import { useTips } from "./useTips";

export const useBill = () => {
  const numberOfPeople = ref(null);
  const baseBillAmount = ref(null);

  const bill = computed({
    get: () => baseBillAmount.value,
    set: (val) => setBill(val),
  });
  const setBill = (val) => {
    baseBillAmount.value = val;
  };

  const { tip: storedTip, setTip } = useTips();
  const tip = computed({
    get: () => storedTip.value,
    set: (val) => setTip(val),
  });
  const tipAmountPerPerson = computed(() => {
    const amount = (bill.value * (tip.value / 100)) / numberOfPeople.value;
    return !numberOfPeople.value || isNaN(amount) ? 0 : amount;
  });

  const totalAmountPerPerson = computed(() => {
    const amount = (bill.value * (tip.value / 100 + 1)) / numberOfPeople.value;
    return isNaN(amount) || !numberOfPeople.value ? 0 : amount;
  });

  return {
    tip,
    numberOfPeople,
    bill,
    tipAmountPerPerson,
    totalAmountPerPerson,
  };
};
