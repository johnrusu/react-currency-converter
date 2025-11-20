import { pathOr } from "ramda";
import { useEffect, useState } from "react";

// mui components
import {
  LinearProgress,
  TextField,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  Button,
  Alert,
  type SelectChangeEvent,
} from "@mui/material";

// constants
import {
  DEFAULT_CURRENCIES,
  APP_TITLE,
  LABELS,
  ERROR_LABELS,
} from "../constants";
import { isArrayNotEmpty, isNilOrEmpty } from "../utils";

interface ICurrencyConverter {
  data?: { [key: string]: number };
  loading?: boolean;
  error?: Error | string | null;
}

const CurrencyConverter: React.FC<ICurrencyConverter> = (
  props: ICurrencyConverter
) => {
  const data: { [key: string]: number } = pathOr({}, ["data"], props);
  const loading = pathOr(false, ["loading"], props);
  const error = pathOr(null, ["error"], props);

  const [errorConversion, setErrorConversion] = useState<string | null>(error);
  const [amount, setAmount] = useState(DEFAULT_CURRENCIES.amount);
  const [fromCurrency, setFromCurrency] = useState<string>(
    DEFAULT_CURRENCIES.from
  );
  const [toCurrency, setToCurrency] = useState<string>(DEFAULT_CURRENCIES.to);
  const [convertedAmount, setConvertedAmount] = useState<string | null>(null);

  const setAmountValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const numericValue = parseFloat(value);
    if (!isNaN(numericValue)) {
      setAmount(numericValue);
    }
  };

  const handleFromChange = (event: SelectChangeEvent) => {
    setFromCurrency(event.target.value as string);
  };

  const handleToChange = (event: SelectChangeEvent) => {
    setToCurrency(event.target.value as string);
  };

  const currencies: [string, number][] = Object.entries(data);

  const exchangeRate = () => {
    if (isNilOrEmpty(data)) return; // No data available
    if (isNilOrEmpty(fromCurrency) || isNilOrEmpty(toCurrency)) return; // Invalid currency selection

    const rateFrom = data[fromCurrency];
    const rateTo = data[toCurrency];
    console.log(rateFrom, rateTo);
    if (rateFrom === rateTo) {
      setErrorConversion(ERROR_LABELS.sameCurrency);
      return;
    }

    if (!isNilOrEmpty(rateFrom) && !isNilOrEmpty(rateTo)) {
      setErrorConversion(null);
      const rate = rateTo / rateFrom;
      const converted = amount * rate;
      setConvertedAmount(
        `${LABELS.convertedAmount}: ${converted.toFixed(2)} ${toCurrency}`
      );
    }
  };

  useEffect(() => {
    exchangeRate();
  }, [amount, fromCurrency, toCurrency]);

  return !isNilOrEmpty(error) ? (
    <>{error}</>
  ) : (
    <div className="w-full h-full flex flex-col items-center justify-center px-4 max-w-3xl m-auto">
      <div className="text-xl font-bold mb-4">{APP_TITLE}</div>
      {loading ? (
        <LinearProgress className="w-full" />
      ) : (
        <div className="flex flex-col w-full">
          <div className="flex flex-col w-full">
            <TextField
              label={`${LABELS.amount} (${amount})`}
              variant="outlined"
              type="number"
              value={amount}
              onChange={setAmountValue}
            />
          </div>
          <div className="flex w-full mt-4 gap-4 flex-col md:flex-row md:gap-4">
            <FormControl fullWidth>
              <InputLabel id="fromCurrencyLabel">
                {LABELS.fromCurrency}
              </InputLabel>
              <Select
                labelId="fromCurrencyLabel"
                MenuProps={{ PaperProps: { sx: { maxHeight: 200 } } }}
                id="fromCurrency"
                value={fromCurrency}
                label={LABELS.fromCurrency}
                onChange={handleFromChange}
              >
                {isArrayNotEmpty(currencies) &&
                  currencies.map(([currencyCode = ""]) => (
                    <MenuItem key={`from-${currencyCode}`} value={currencyCode}>
                      {currencyCode}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="toCurrencyLabel">{LABELS.toCurrency}</InputLabel>
              <Select
                labelId="toCurrencyLabel"
                MenuProps={{ PaperProps: { sx: { maxHeight: 200 } } }}
                id="toCurrency"
                value={toCurrency}
                label={LABELS.toCurrency}
                onChange={handleToChange}
              >
                {isArrayNotEmpty(currencies) &&
                  currencies.map(([currencyCode = ""]) => (
                    <MenuItem key={`from-${currencyCode}`} value={currencyCode}>
                      {currencyCode}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </div>
          <div className="mt-4">
            <Button
              variant="contained"
              color="primary"
              className="w-full p-8"
              onClick={exchangeRate}
            >
              {LABELS.exchangeRate}
            </Button>
          </div>
          {!isNilOrEmpty(errorConversion) && (
            <Alert severity="warning" className="w-full p-8 mt-4">
              {errorConversion}
            </Alert>
          )}
          {!isNilOrEmpty(convertedAmount) && isNilOrEmpty(errorConversion) && (
            <Alert severity="success" className="w-full p-8 mt-4">
              {convertedAmount}
            </Alert>
          )}
        </div>
      )}
    </div>
  );
};
export default CurrencyConverter;
