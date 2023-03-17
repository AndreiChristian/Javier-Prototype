import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

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

  constructor(  private store:Store ) {}

  // onAddItem() {
  //   console.log(this.newItem);
  //   this.store.dispatch(
  //     new AddOption(this.newItem)
  //   );
  //     this.newItem = '';
  // }
}
