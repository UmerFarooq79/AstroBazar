import { all } from 'redux-saga/effects';
import SettingSaga from './setting/saga';
import AuthSaga from './auth/saga';
import App from './app/saga';
import Ecomerce from './ecomerce/saga';

export default function* rootSaga() {
    yield all([AuthSaga(), SettingSaga(), AuthSaga(), App(), Ecomerce()]);
}
