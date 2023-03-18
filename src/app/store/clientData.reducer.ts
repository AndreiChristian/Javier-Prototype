import * as AddClientDataActions from './clientData.actions';
import { initialClientState } from './initial.state';

export function addClientDataReducer(
  state = initialClientState,
  action: AddClientDataActions.AddClientData
) {
  switch (action.type) {
    case AddClientDataActions.ADD_CLIENT_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
