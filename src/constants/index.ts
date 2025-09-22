const generateCurrencyApiUrl = (apiKey: string = "") =>
  `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;
const LABELS = {
  amount: "Amount",
  fromCurrency: "From Currency",
  toCurrency: "To Currency",
  convertedAmount: "Converted Amount",
  exchangeRate: "Exchange Rate",
  convertButton: "Convert",
};

const DEFAULT_CURRENCIES = {
  from: "EUR",
  to: "RON",
  amount: 100,
};

const ERROR_LABELS = {
  missingApi:
    "API key is missing. Please set the VITE_CURRENCY_API_KEY environment variable.",
  sameCurrency: "Please select different currencies.",
};

const APP_TITLE = "Currency Converter";

export {
  generateCurrencyApiUrl,
  LABELS,
  DEFAULT_CURRENCIES,
  APP_TITLE,
  ERROR_LABELS,
};
