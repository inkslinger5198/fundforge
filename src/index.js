import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Routes, Route } from "react-router-dom";

import App from "./App/App";

import "./index.css";

ReactDOM.render(
  <HashRouter>
    <Routes>
      <Route exact path="/" element={<App />} />
    </Routes>
  </HashRouter>,
  document.getElementById("root")
);
