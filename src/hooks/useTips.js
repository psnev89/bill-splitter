import { ref } from "vue";

const defaultOptions = {
  allowToggle: true,
};

export const useTips = (options = defaultOptions) => {
  const TIPS_OPTIONS = [5, 10, 15, 20];
  const { allowToggle } = options;
  const activeTip = ref(null);

  const setTip = (tip) => {
    if (allowToggle && +tip === activeTip.value) {
      activeTip.value = null;
    } else {
      activeTip.value = +tip;
    }
  };
  return {
    tipsOptions: TIPS_OPTIONS,
    tip: activeTip,
    setTip,
  };
};
