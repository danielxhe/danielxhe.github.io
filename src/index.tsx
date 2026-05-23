import "./index.css";
import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "./App";
import { DeepDives } from "./components/DeepDives";

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/deep-dives" element={<DeepDives />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
