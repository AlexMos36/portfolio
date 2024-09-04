import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import emailjs from "emailjs-com";

// Initialize EmailJS
emailjs.init({
  publicKey: process.env.REACT_APP_PUBLIC_KEY,
  blockHeadless: true,
  blockList: {
    list: ["foo@emailjs.com", "bar@emailjs.com"], // Replace with actual emails you want to block
    watchVariable: "user_email", // This should match the name attribute of the email field in your form
  },
  limitRate: {
    id: "app",
    throttle: 10000, // 10 seconds between requests
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
