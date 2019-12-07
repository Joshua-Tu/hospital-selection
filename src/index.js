import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { SelectedValueContextProvider } from "./contexts/selectedValueContext";

ReactDOM.render(
  <SelectedValueContextProvider>
    <App />
  </SelectedValueContextProvider>,
  document.querySelector("#root")
);
