import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { AppWithLayout } from "./App";
import reportWebVitals from "./reportWebVitals";
// import { Provider } from "react-redux";
// import store from "./Store/Store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <Provider store={store}>
    <AppWithLayout />
  // </Provider>
);

reportWebVitals();
