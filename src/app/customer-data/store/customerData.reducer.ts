import { Action } from '@ngrx/store';

const initiateState = {
  clientData: {
    name: 'ANDREI',
    email: 'NETOIU',
    phone: 'ADDAADSAAS',
  },
};

import * as AddCustomerDataActions from './customerData.action';

export function addCustomerDataReducer(
  state = initiateState,
  action: AddCustomerDataActions.AddClientData
) {
  switch (action.type) {
    case AddCustomerDataActions.ADD_CLIENT_DATA:
      return {
        ...state,
        clientData: {
            ...state.clientData,
            ...action.payload
        }
      };
    default:
      return state;
  }
}
