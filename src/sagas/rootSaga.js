import { takeEvery, all } from "redux-saga/effects";
import ACTION from "js/action_constants";
import { loadHome } from "./homeSaga";

export default () => all([takeEvery(ACTION.HOME.LOADHOME, loadHome)]);
