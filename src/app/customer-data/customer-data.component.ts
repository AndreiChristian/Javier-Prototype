import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Client } from '../interfaces';
import { AddClientData } from '../store/clientData.actions';


@Component({
  selector: 'app-customer-data',
  templateUrl: './customer-data.component.html',
  styleUrls: ['./customer-data.component.css'],
})
export class CustomerDataComponent {
  customer: Client = {
    name: '',
    email: '',
    phone: '',
  };

  constructor(private store: Store<{ addClientData: Client }>) {}

  addCustomerData() {
    console.log(this.customer);
    this.store.dispatch(new AddClientData({ ...this.customer }));
  }
}
