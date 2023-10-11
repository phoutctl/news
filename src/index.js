import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Login from "./Login.js";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Album from "./Album";
import SignUp from "./Signup";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/album" element={<Album />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  </BrowserRouter>
  //   <BrowserRouter>
  //     <App />
  //   </BrowserRouter>
);
// ReactDOM.render(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<App />} />
//     </Routes>
//   </BrowserRouter>,
//   document.getElementById("root")
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
