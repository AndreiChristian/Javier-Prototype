import { Action } from '@ngrx/store';
import { Client } from '../interfaces';

export const ADD_CLIENT_DATA = 'ADD_CLIENT_DATA';

export const SELECT_OPTION = 'SELECT_OPTION';
export const SELECT_IMPORTANT = 'SELECT_IMPORTANT';
export const ADD_EXTRA_ITEM = 'ADD_EXTRA_ITEM';

export class addOption implements Action {
  readonly type = SELECT_OPTION;

  constructor(public payload: any) {}
}

export class selectImportant implements Action {
  readonly type = SELECT_IMPORTANT;

  constructor(public payload: any) {}
}

export class addExtraItem implements Action {
  readonly type = ADD_EXTRA_ITEM;

  constructor(public payload: any) {}
}

export type optionTypes = selectImportant | addOption | addExtraItem;
