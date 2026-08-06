import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { DocumentProvider } from "./context/DocumentContext";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <DocumentProvider>
      <App />
    </DocumentProvider>
  </BrowserRouter>
);
