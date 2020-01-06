import {feedSaga} from '../Components/Pages/FeedPage/FeedPage.saga';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
    yield all([
        feedSaga()
    ])
}