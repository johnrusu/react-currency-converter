import { pathOr } from "ramda";
import { useCallback, useState, useEffect } from "react";

// mui components
import {
  LinearProgress,
  TextField,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  Button,
  Box,
  type SelectChangeEvent,
} from "@mui/material";

// mui icons
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";

// constants
import { DEFAULT_CURRENCIES, APP, LABELS, ERROR_LABELS } from "../constants";
import { isArrayNotEmpty, isNilOrEmpty } from "../utils";
import Footer from "./Footer";

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

  const exchangeRate = useCallback(() => {
    if (isNilOrEmpty(data)) return; // No data available
    if (isNilOrEmpty(fromCurrency) || isNilOrEmpty(toCurrency)) return; // Invalid currency selection

    const rateFrom = data[fromCurrency];
    const rateTo = data[toCurrency];
    if (rateFrom === rateTo) {
      setErrorConversion(ERROR_LABELS.sameCurrency);
      return;
    }

    if (!isNilOrEmpty(rateFrom) && !isNilOrEmpty(rateTo)) {
      setErrorConversion(null);
      const rate = rateTo / rateFrom;
      const converted = amount * rate;
      setConvertedAmount(
        `${LABELS.convertedAmount}: <u><strong>${converted.toFixed(
          2
        )} ${toCurrency}</strong></u>`
      );
    }
  }, [data, fromCurrency, toCurrency, amount]);

  const handleSwap = () => {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
  };

  useEffect(() => {
    if (!isNilOrEmpty(convertedAmount)) {
      exchangeRate();
    }
  }, [fromCurrency, toCurrency, exchangeRate, convertedAmount]);

  return !isNilOrEmpty(error) ? (
    <>{error}</>
  ) : (
    <div className="w-full h-full flex flex-col items-center justify-center px-4 max-w-3xl m-auto">
      <div className="text-xl font-bold mb-4">{APP.TITLE}</div>
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
            <FormControl sx={{ flex: 1 }}>
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
            <FormControl sx={{ alignSelf: "center", height: "100%" }}>
              <Button
                onClick={handleSwap}
                variant="outlined"
                color="primary"
                sx={{ minWidth: "100px", height: "100%" }}
              >
                <SwapHorizIcon />
              </Button>
            </FormControl>
            <FormControl sx={{ flex: 1 }}>
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

          {!isNilOrEmpty(errorConversion) && (
            <Box className="w-full py-8 pb-4 text-2xl font-semibold text-white text-center">
              {errorConversion}
            </Box>
          )}
          {!isNilOrEmpty(convertedAmount) && isNilOrEmpty(errorConversion) && (
            <Box className="w-full py-8 pb-4 text-2xl font-semibold text-white text-center">
              <div dangerouslySetInnerHTML={{ __html: convertedAmount || "" }}></div>
            </Box>
          )}

          <div className="mt-4">
            <Button
              variant="contained"
              color="primary"
              size="large"
              className="w-full"
              sx={{ textTransform: "none" }}
              onClick={exchangeRate}
            >
              {LABELS.exchangeRate}
            </Button>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
};
export default CurrencyConverter;
