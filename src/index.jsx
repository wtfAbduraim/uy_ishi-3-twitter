import React from "react";
import ReactDOM from "react-dom/client";
import { Provider as LocalizationProvider } from "./Components/Context/Localization";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LocalizationProvider>
      <App />
    </LocalizationProvider>
  </React.StrictMode>
);
