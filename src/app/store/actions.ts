import { Action } from '@ngrx/store';

export enum ProjectActionTypes {
  ADD_PROJECT = 'ADD_PROJECT',
  ACTIVE_ROUTE = 'ACTIVE_ROUTE'
}
export class AddProject implements Action {
  readonly type = ProjectActionTypes.ADD_PROJECT;
  constructor(public payload: any) {}
}
export class ActiveRoute implements Action {
  readonly type = ProjectActionTypes.ACTIVE_ROUTE;
  constructor(public payload: any) {}
}
export type ProjectActions = AddProject | ActiveRoute;
