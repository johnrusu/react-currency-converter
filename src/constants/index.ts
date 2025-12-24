const generateCurrencyApiUrl = (apiKey: string = "") =>
  `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;
const LABELS = {
  amount: "Amount",
  fromCurrency: "From Currency",
  toCurrency: "To Currency",
  convertedAmount: "Converted Amount",
  exchangeRate: "Exchange Rate",
  convertButton: "Convert",
  allRights: "All rights reserved.",
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

const APP = {
  BASENAME: "/react-currency-converter/",
  TITLE: "Currency Converter",
};

const ROUTER_PATHS: {
  path: string;
  name: string;
  icon: string;
}[] = [
  {
    path: "/",
    name: "Home",
    icon: "HomeIcon",
  },
  {
    path: "/about",
    name: "About",
    icon: "InfoIcon",
  },
];

const ABOUT_PAGE = {
  pageTitle: "About Currency Converter",
  subtitle: "A simple and fast currency conversion tool",
  sectionsTitle: {
    features: "Features",
    technologies: "Technologies",
    capabilities: "Key Capabilities",
    openSource: "Open Source",
  },
  features: [
    {
      title: "Modern Stack",
      description: "Built with React, TypeScript, and Material-UI",
    },
    {
      title: "Fast & Responsive",
      description: "Optimized with Vite and responsive design for all devices",
    },
    {
      title: "Real-time Rates",
      description: "Live exchange rates from ExchangeRate-API",
    },
  ],
  technologies: [
    "React",
    "TypeScript",
    "Material-UI",
    "TailwindCSS",
    "Vite",
    "React Router",
    "ExchangeRate-API",
  ],
  capabilities: [
    "Convert between major world currencies",
    "Real-time exchange rate updates",
    "Clean and intuitive interface",
    "Responsive design for mobile and desktop",
    "Fast performance with Vite",
    "Dark theme support",
  ],
  openSource: {
    title: "Open Source",
    description: "This project is open source and available on GitHub",
    linkText: "View on GitHub",
    repoUrl: "https://github.com/johnrusu/react-currency-converter",
  },
  footer: (year: number) => `Created by Rusu Ionut • ${year}`,
};

const appMetadata = {
  title: `Rusu Ionut - ${APP.TITLE}`,
  author: "Rusu Ionut",
  description:
    "A simple and fast currency converter application built with React and TypeScript. Convert currencies with ease and get real-time exchange rates.",
  keywords:
    "currency converter, react, material-ui, tailwindcss, typescript, ionut rusu, productivity",
};

export {
  generateCurrencyApiUrl,
  LABELS,
  DEFAULT_CURRENCIES,
  APP,
  ERROR_LABELS,
  ROUTER_PATHS,
  ABOUT_PAGE,
  appMetadata,
};
