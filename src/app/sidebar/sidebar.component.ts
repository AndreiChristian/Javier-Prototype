import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  user: Observable<{
    clientData: { name: string; email: string; phone: string };
  }>;

  constructor(
    private store: Store<{
      addCustomerData: {
        clientData: { name: string; email: string; phone: string };
      };
    }>
  ) {}

  ngOnInit(): void {
    this.user = this.store.select('addCustomerData');
    console.log(
      this.user.subscribe((data) => {
        console.log(data);
      })
    );
  }
}
