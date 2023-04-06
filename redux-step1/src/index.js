import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ReduxApp from "./ReduxApp";
import { Provider } from "react-redux";
import { legacy_createStore } from "redux";
import reducer from "./redux/store";

const store = legacy_createStore(reducer);
console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {/* <App /> */}
    <Provider store={store}>
      <ReduxApp />
    </Provider>
  </>
);
