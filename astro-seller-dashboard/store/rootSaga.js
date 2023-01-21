import { all } from 'redux-saga/effects';
import AppSaga from './app/saga';
import AuthSaga from './auth/saga';

export default function* rootSaga() {
    yield all([AppSaga(), AuthSaga()]);
}
