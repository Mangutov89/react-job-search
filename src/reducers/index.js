import { combineReducers } from 'redux';
import jobChangeReducer from './jobChangeReducer';

const rootReducer = combineReducers({
  currentJobId: jobChangeReducer
})

export default rootReducer;