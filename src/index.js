import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import RootSaga from "sagas/rootSaga";
import RootReducer from "reducers/rootReducer";
import App from "./App";
import { AppContainer } from "react-hot-loader";
import logger from "redux-logger";


if (module.hot) module.hot.accept();
const sagaMiddleware = createSagaMiddleware();
const store = createStore(RootReducer, applyMiddleware(sagaMiddleware));

let sagaTask = sagaMiddleware.run(function*() {
  yield RootSaga();
});

// and react will render the whole stuff into the div with hot module stuff
ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <App />
    </Provider>
  </AppContainer>,
  document.getElementById("root")
);

// Hot Module Replacement API
if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept("reducers/rootReducer", () => {
    store.replaceReducer(require("reducers/rootReducer").default);
  });

  // Enable Webpack hot module replacement for sagas
  module.hot.accept("sagas/rootSaga", () => {
    const getNewSagas = require("sagas/rootSaga").default;
    sagaTask.cancel();
    sagaTask.done.then(() => {
      sagaTask = sagaMiddleware.run(function*() {
        yield getNewSagas();
      });
    });
  });

  // Enable Webpack hot module replacement for the app
  module.hot.accept("./App", () => {
    const NextApp = require("./App").default;
    ReactDOM.render(
      <AppContainer>
        <Provider store={store}>
          <NextApp />
        </Provider>
      </AppContainer>,
      document.getElementById("root")
    );
  });
}
