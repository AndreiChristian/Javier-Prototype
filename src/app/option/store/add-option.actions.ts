import { Action } from '@ngrx/store';

export const ADD_OPTION = 'ADD_OPTION';

export class AddOption implements Action {
  readonly type = ADD_OPTION;

  constructor(public payload: any) {}
}
