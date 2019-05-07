import constants from './../constants';



const { initialState, types } = constants;

const jobSaveReducer = (state = initialState.jobsById, action) => {
  switch (action.type) {
  case types.SAVE_JOB:
    console.log(action.currentJob)
    let newJob = action.currentJob;
    let newState = Object.assign({}, state, {newJob});
    return newState;
  default:
    return state;
  }
};

export default jobSaveReducer;