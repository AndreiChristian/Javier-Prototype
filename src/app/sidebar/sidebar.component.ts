import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Client } from '../interfaces';
import { AddClientData } from '../store/clientData.actions';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  client: Observable<Client>;

  showDropdown = false;

  constructor(private store: Store<{ addClientData: Client }>) {}

  ngOnInit(): void {
    this.client = this.store.select('addClientData');
  }

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  
}
