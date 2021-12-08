import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Home from "./routes/Home";
import Error from "./routes/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/index.css";
import ShowPic from "./routes/ShowPic";
import Pictures from "./routes/Pictures";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="pic">
            <Route index element={<Pictures />} />
            <Route path=":id" element={<ShowPic />} />
          </Route>
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
