import { ProjectActionTypes, ProjectActions } from './actions';

export let initialState = [];

export function reducer(state = initialState, action: ProjectActions) {
  switch (action.type) {
    case ProjectActionTypes.ADD_PROJECT:
      return {...state, ...action.payload};
    default:
      return state;
  }
}
