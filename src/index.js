import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";

// import App from './App';
// import Demo2 from './Demo2';
// import Demo from './Demo';
// import Jsx from './Jsx';
import Props from "./Props";
import State from "./State";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <State />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
