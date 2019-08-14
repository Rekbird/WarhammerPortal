import { put, takeEvery, all, call } from 'redux-saga/effects';
import * as ActionCreators from "../Store/ActionsCreators.js";
import * as utils from "../Scripts/CommonFunctions.js";

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* requestUnitList(action) {
    try {
        yield delay(2000);
        const retrievedUnits = yield call(utils.GetUnits, action.FactionId);
        yield put(ActionCreators.SetRetrievedUnits(retrievedUnits));
    } catch (error) {
        yield put(ActionCreators.ASYNC_REQUEST_FAILED(error));
    }
}

function* watchRequestUnitList(){
    yield takeEvery('ASYNC_RetrieveUnits',requestUnitList);
}


function* rootSaga() {
    yield all([
        watchRequestUnitList()
    ])
  }

export default rootSaga;