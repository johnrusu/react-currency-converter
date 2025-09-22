// react
import React, { useEffect } from "react";

import { pathOr } from "ramda";
// constants
import { generateCurrencyApiUrl } from "./constants";

// components
import ErrorEnv from "./components/ErrorEnv";
import CurrencyConverter from "./components/CurrencyConverter";

// hooks
import useFetch from "./hooks/fetch";

// utils
import { isNilOrEmpty } from "./utils";

// env
const currencyApiKey: string = import.meta.env.VITE_CURRENCY_API_KEY || "";

// check if env is valid
const IS_ENV_VALID: boolean = !isNilOrEmpty(currencyApiKey);

type CurrencyConverterProps = {
  data: { [key: string]: number };
  loading: boolean;
  error: string | Error | null;
};

const HOC_CurrencyConverter: React.FC<{
  children: React.ReactElement<CurrencyConverterProps>;
}> = ({ children }) => {
  const { data, loading, error } = useFetch(
    generateCurrencyApiUrl(currencyApiKey)
  );

  const currencyData: { [key: string]: number } | null =
    pathOr(null, ["conversion_rates"], data) || {};

  useEffect(() => {
    if (error) {
      console.error("Error fetching currency data:", error);
    }
  }, [error]);

  return React.cloneElement(children, {
    data: currencyData,
    loading,
    error,
  });
};

function App() {
  return IS_ENV_VALID ? (
    <>
      <HOC_CurrencyConverter>
        <CurrencyConverter />
      </HOC_CurrencyConverter>
    </>
  ) : (
    <ErrorEnv />
  );
}

export default App;
