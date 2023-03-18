import { Action } from '@ngrx/store';
import { Client } from '../interfaces';

export const ADD_CLIENT_DATA = 'ADD_CLIENT_DATA';

export const SELECT_OPTION = "SELECT_OPTION"

export class AddClientData implements Action {
  readonly type = ADD_CLIENT_DATA;

  constructor(public payload: Client) {}
}

// export type AddClientDataTypes = SELECT_OPTION 