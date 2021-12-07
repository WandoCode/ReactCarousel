import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Home from "./routes/Home";
import Error from "./routes/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/index.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
