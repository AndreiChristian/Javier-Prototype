import * as AddClientDataActions from './clientData.actions';
import { initialSectionState } from './initial-section.state';


export function addOptionReducer(
  state = initialSectionState,
  action: AddClientDataActions.AddClientData,
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
