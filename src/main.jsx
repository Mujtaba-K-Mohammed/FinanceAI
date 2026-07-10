import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Login from "./pages/Login.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import Register from "./pages/Register.jsx";
import Income from "./pages/Income.jsx";
import Expenses from "./pages/Expenses.jsx";
import Savings from "./pages/Savings.jsx";
import Analysis from "./pages/Analysis.jsx";
import Settings from "./pages/Settings.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/income" element={<Income />} />
      <Route path="/expenses" element={<Expenses />} />
      <Route path="/savings" element={<Savings />} />
      <Route path="/analysis" element={<Analysis />} />
      <Route path="/settings" element={<Settings />} />

      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>,
);
