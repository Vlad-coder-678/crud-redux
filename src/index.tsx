// external imports
import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

// internal imports
import { store } from "store";
import App from "./App";
import GlobalStyles from "./assets/styles/global.styles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    <GlobalStyles />
  </StrictMode>,
);
