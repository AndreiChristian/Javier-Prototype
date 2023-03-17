import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AddOption } from '../option/store/add-option.actions';

@Component({
  selector: 'app-ngrx',
  templateUrl: './ngrx.component.html',
  styleUrls: ['./ngrx.component.css'],
})
export class NgrxComponent implements OnInit {
  items: Observable<{ items: string[] }>;

  newItem = '';

  constructor(
    private store: Store<{
      addOption: {
        items: string[];
      };
    }>
  ) {}

  ngOnInit(): void {
    this.items = this.store.select('addOption');
  }

  onAddItem() {
    console.log(this.newItem);
    this.store.dispatch(
      new AddOption(this.newItem)
    );
      this.newItem = '';
  }
}