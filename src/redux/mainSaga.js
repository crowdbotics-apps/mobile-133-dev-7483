import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import CalendarView28803Saga from '../features/CalendarView28803/redux/sagas';
import EmailAuth18801Saga from '../features/EmailAuth18801/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
CalendarView28803Saga,
EmailAuth18801Saga,
    
  ]);
}