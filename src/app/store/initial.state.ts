import { AppState, Client } from '../interfaces';
import { initialSectionState } from './initial-section.state';

export const initialClientState: Client = {
  name: '',
  email: '',
  phone: '',
};

export const initialState: AppState = {
  clientData: initialClientState,
  sectionData: initialSectionState,
};
