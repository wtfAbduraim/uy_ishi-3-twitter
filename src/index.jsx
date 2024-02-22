import React from "react";
import ReactDOM from "react-dom/client";
import { Provider as MoreProvider } from "./Components/Context/Localization";
import { Provider as MoreTheme } from "./Components/Context/Theme";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MoreTheme>
      <MoreProvider>
        <App />
      </MoreProvider>
    </MoreTheme>
  </React.StrictMode>
);
