// react
import React from "react";
import { Routes, Route } from "react-router-dom";

// mui
import { Container, Box } from "@mui/material";
import {
  ThemeProvider,
  createTheme,
  type PaletteMode,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// components
import ErrorEnv from "./components/ErrorEnv";
import Header from "./components/Header";

// theme
const darkTheme = createTheme({
  palette: {
    mode: "dark" as PaletteMode,
  },
});

// pages
import About from "./pages/About";
import Home from "./pages/Home";

// utils
import { isNilOrEmpty } from "./utils";

// env
const currencyApiKey: string = import.meta.env.VITE_CURRENCY_API_KEY || "";

// check if env is valid
const IS_ENV_VALID: boolean = !isNilOrEmpty(currencyApiKey);

const App: React.FC = (): React.ReactElement => {
  return IS_ENV_VALID ? (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box
        sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Header />
        <Container sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Container>
      </Box>
    </ThemeProvider>
  ) : (
    <ErrorEnv />
  );
};

export default App;
