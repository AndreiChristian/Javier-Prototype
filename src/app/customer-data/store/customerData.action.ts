// import { Action } from '@ngrx/store';

// export const ADD_OPTION = 'ADD_OPTION';

// export class AddOption implements Action {
//   readonly type = ADD_OPTION;

//   constructor(public payload: any) {}
// }

import { Action } from '@ngrx/store';

export const ADD_CLIENT_DATA = 'ADD_CLIENT_DATA';

export class AddClientData implements Action {
  readonly type = ADD_CLIENT_DATA;

  constructor(public payload: any) {}
}

