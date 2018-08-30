import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { store } from "./store";
import { injectGlobalStyle, injectResetStyle } from "reactackle";

injectGlobalStyle();
injectResetStyle();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
