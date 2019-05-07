import constants from './../constants';


const { initialState, types } = constants;

const jobChangeReducer = (state = initialState.currentJobId, action) => {
  switch (action.type) {
  case types.SAVE_JOB:
    return action.newSelectedJobId;
  default:
    return state;
  }
}

export default jobChangeReducer;