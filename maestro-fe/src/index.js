import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import theme from "./style/theme.json";
import GlobalStyle from "./style/globalStyles";
import store from "./app/store";

// Importing fonts
import './fonts/BentonSans/BentonSans-Bold.otf';
import './fonts/BentonSans/BentonSans-Book.otf';
import './fonts/BentonSans/BentonSans-Medium.otf';
import './fonts/BentonSans/BentonSans-Regular.otf';
import './style/fonts.css';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
