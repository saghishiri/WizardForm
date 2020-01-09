import { Action } from '@ngrx/store';

export enum ProjectActionTypes {
  ADD_PROJECT = 'ADD_PROJECT'
}
export class AddProject implements Action {
  readonly type = ProjectActionTypes.ADD_PROJECT;
  constructor(public payload: any) {}
}
export type ProjectActions = AddProject;
