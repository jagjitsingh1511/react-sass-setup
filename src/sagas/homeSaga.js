import { delay } from "redux-saga";
import { put } from "redux-saga/effects";
import ACTION from "js/action_constants.js";

function* loadHome(action) {
  yield put({ type: ACTION.HOME.LOADHOMEDONE });
}

export { loadHome };
