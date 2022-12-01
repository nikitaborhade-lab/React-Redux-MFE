import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Index from "./Component";
import "./index.css";

export const Test = ()=>{
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  )
}

// export const Foo = () => {
//   return (
//     <p>Foo</p>
//   )
// }

export const App = () => (
  <div>
    <h4>Counter App</h4>
      <Test />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));

