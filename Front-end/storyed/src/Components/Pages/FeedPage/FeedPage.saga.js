import { getData } from "../../../api";
import { put, takeEvery } from 'redux-saga/effects';
import { getUpdateFeedAction } from "./FeedPage.actions";

export function* getFeed(){
    let data = yield getData("/stories").then((response) => response.json());
    yield put(getUpdateFeedAction(data));
} 

export function* feedSaga(){
    yield takeEvery('GET_FEED', getFeed);
}