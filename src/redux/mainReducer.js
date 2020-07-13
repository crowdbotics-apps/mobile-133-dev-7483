import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import CalendarView28803Reducer from '../features/CalendarView28803/redux/reducers';
import EmailAuth18801Reducer from '../features/EmailAuth18801/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
CalendarView28803: CalendarView28803Reducer,
EmailAuth18801: EmailAuth18801Reducer,

});