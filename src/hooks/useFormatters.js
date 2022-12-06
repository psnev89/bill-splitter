const defaultOptions = {
  locale: "pt-PT",
};

export const useFormatters = (options = defaultOptions) => {
  const { locale } = options;
  const currencyFormatter = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  });
  const formatCurrency = (value) => {
    return currencyFormatter.format(value);
  };

  return {
    formatCurrency,
  };
};
