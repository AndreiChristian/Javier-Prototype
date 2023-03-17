import { Action } from '@ngrx/store';

const initiateState = {
  items: ['Hello', 'World'],
};

import * as AddOptionActions from './add-option.actions';

export function addOptionReducer(
  state = initiateState,
  action: AddOptionActions.AddOption
) {
  switch (action.type) {
    case AddOptionActions.ADD_OPTION:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    default:
      return state;
  }
}
