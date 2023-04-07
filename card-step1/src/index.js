import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import AuthLogic from "./service/authLogic";
import { legacy_createStore } from "redux";
import rootReducer from "./redux/rootReducer";
import firebaseApp from "./service/firebase";
import { setAuth } from "./redux/userAuth/action";

const authLogic = new AuthLogic(firebaseApp);
const store = legacy_createStore(rootReducer);
store.dispatch(
  setAuth(authLogic.getUserAuth(), authLogic.getGoogleAuthProvider())
);
console.log(store.getState());
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </>
);
