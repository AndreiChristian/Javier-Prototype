export interface Option {
  optionId: string;
  optionName: string;
  selected: boolean;
  important: boolean;
  img?: boolean;
}

export interface Item {
  itemId: string;
  itemName: string;
  options: Option[];
}

export interface Section {
  sectionId: string;
  sectionName: string;
  touched: boolean;
  requestedCall: boolean;
  configureLater: boolean;
  items: Item[];
}

// client Data

export interface Client {
  name: string;
  email: string;
  phone: string;
}

export interface AppState {
  clientData: Client;
  sectionData: Section[];
}
