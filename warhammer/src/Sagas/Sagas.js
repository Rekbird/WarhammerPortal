import { put, takeEvery, all, call } from 'redux-saga/effects';
import * as ActionCreators from "../Store/ActionsCreators.js";
import * as utils from "../Scripts/CommonFunctions.js";

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* requestUnitList(action) {
    try {
        yield put(ActionCreators.SetRetrievedUnits([], true));
        yield delay(2000);
        const retrievedUnits = yield call(utils.GetUnits, action.FactionId);
        yield put(ActionCreators.SetRetrievedUnits(retrievedUnits, false));
    } catch (error) {
        yield put(ActionCreators.ASYNC_REQUEST_FAILED(error));
        yield put(ActionCreators.SetRetrievedUnits([], false));
    }
}

function* watchRequestUnitList(){
    yield takeEvery('ASYNC_RetrieveUnits',requestUnitList);
}

function* requestFactionsList() {
    try {
        yield put(ActionCreators.SetRetrievedFactions([], true));
        yield delay(2000);
        const retrievedFactions = yield call(utils.GetFactions);
        yield put(ActionCreators.SetRetrievedFactions(retrievedFactions, false));
    } catch (error) {
        yield put(ActionCreators.ASYNC_REQUEST_FAILED(error));
        yield put(ActionCreators.SetRetrievedFactions([], false));
    }
}

function* watchRequestFactionsList(){
    yield takeEvery('ASYNC_RetrieveFactions', requestFactionsList);
}

function* requestDetachmentsList() {
    try {
        yield put(ActionCreators.SetRetrievedDetachments([], true));
        yield delay(2000);
        const retrievedDetachments = yield call(utils.GetDetachments);
        yield put(ActionCreators.SetRetrievedDetachments(retrievedDetachments, false));
    } catch (error) {
        yield put(ActionCreators.ASYNC_REQUEST_FAILED(error));
        yield put(ActionCreators.SetRetrievedDetachments([], false));
    }
}

function* watchRequestDetachmentsList(){
    yield takeEvery('ASYNC_RetrieveDetachments', requestDetachmentsList);
}

function* requestChapterTacticsList(action) {
    try {
        yield put(ActionCreators.SetRetrievedChapterTactics([], true));
        yield delay(2000);
        const retrievedChapterTactics = yield call(utils.GetChapterTactics, action.FactionId);
        yield put(ActionCreators.SetRetrievedChapterTactics(retrievedChapterTactics, false));
    } catch (error) {
        yield put(ActionCreators.ASYNC_REQUEST_FAILED(error));
        yield put(ActionCreators.SetRetrievedChapterTactics([], false));
    }
}

function* watchRequestChapterTacticsList(){
    yield takeEvery('ASYNC_RetrieveChapterTactics', requestChapterTacticsList);
}




function* rootSaga() {
    yield all([
        watchRequestUnitList(),
        watchRequestFactionsList(),
        watchRequestDetachmentsList(),
        watchRequestChapterTacticsList()
    ])
  }

export default rootSaga;