import { Action } from '@ngrx/store';
import { Client } from '../interfaces';

export const ADD_CLIENT_DATA = 'ADD_CLIENT_DATA';

export const SELECT_OPTION = "SELECT_OPTION"

export class addOption implements Action {
  readonly type = SELECT_OPTION;

  constructor(public payload: any) {}
}

// export type AddClientDataTypes = SELECT_OPTION 