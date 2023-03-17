import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddClientData } from './store/customerData.action';

@Component({
  selector: 'app-customer-data',
  templateUrl: './customer-data.component.html',
  styleUrls: ['./customer-data.component.css'],
})
export class CustomerDataComponent {
  customer = {
    name: '',
    email: '',
    phone: '',
  };

  constructor(
    private store: Store<{
      addCustomerData: {
        clientData: { name: string; email: string; phone: string };
      };
    }>
  ) {}

  // onAddItem() {
  //   console.log(this.newItem);
  //   this.store.dispatch(
  //     new AddOption(this.newItem)
  //   );
  //     this.newItem = '';
  // }

  addCustomerData() {
    console.log(this.customer);
    this.store.dispatch(new AddClientData({ ...this.customer }));
  }
}
