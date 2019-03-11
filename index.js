import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";

import createHistory from "history/createBrowserHistory";
import configureStore from "./configureStore";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const history = createHistory();
const store = configureStore(history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
        <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
