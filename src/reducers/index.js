import { combineReducers } from 'redux';
import jobSaveReducer from './jobSaveReducer';

const rootReducer = combineReducers({
  jobsById: jobSaveReducer
});

export default rootReducer;