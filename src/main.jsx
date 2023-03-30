import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, HashRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { MyContextProvider } from "./MyContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <MyContextProvider>
        <App />
      </MyContextProvider>
    </HashRouter>
  </React.StrictMode>
);
