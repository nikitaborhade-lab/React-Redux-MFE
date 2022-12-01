import React from "react";
import ReactDOM from "react-dom";
import  {  Test}  from "counter/Test" //App.js
import "./index.css";

const App = () => (
  <div>
    <h4>Container App</h4>
    <Test />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
