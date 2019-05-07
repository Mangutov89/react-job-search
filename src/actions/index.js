import * as types from './../constants/ActionsTypes';

export const saveJob = (currentJob) => ({
  type: types.SAVE_JOB,
  currentJob
});