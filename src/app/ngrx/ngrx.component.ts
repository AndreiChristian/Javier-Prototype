import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ngrx',
  templateUrl: './ngrx.component.html',
  styleUrls: ['./ngrx.component.css'],
})
export class NgrxComponent implements OnInit {
  items: Observable<{ items: string[] }>;

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
}
