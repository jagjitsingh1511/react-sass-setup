import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { routerReducer } from "react-router-redux";
import createSagaMiddleware from "redux-saga";
import RootSaga from "sagas/rootSaga";
import RootReducer from "reducers/rootReducer";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(RootReducer, applyMiddleware(sagaMiddleware));

let sagaTask = sagaMiddleware.run(function*() {
  yield RootSaga();
});

// and react will render the whole stuff into the div
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
