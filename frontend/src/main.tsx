import React from "react";
import ReactDOM from "react-dom/client";
import App from "./00_app/appComponent/App";
import "./00_app/styles/index.css";

// biome-ignore lint/style/noNonNullAssertion: <explanation>
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
