import { all, put, takeEvery } from 'redux-saga/effects';

import { actionTypes, switchDemoPanelSuccess } from './action';

function* switchDemoPanel({ payload }) {
    try {
        console.log(payload.payload);
        yield put(switchDemoPanelSuccess(payload));
    } catch (err) {
        console.log(err);
    }
}

export default function* rootSaga() {
    yield all([takeEvery(actionTypes.SWITCH_DEMO_PANEL, switchDemoPanel)]);
}
