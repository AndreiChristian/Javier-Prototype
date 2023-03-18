import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Item, Section } from '../interfaces';
import * as AddOptionActions from '../store/option.actions';

@Component({
  selector: 'app-section-items',
  templateUrl: './section-items.component.html',
  styleUrls: ['./section-items.component.css'],
})
export class SectionItemsComponent {
  @Input() item: Item;
  extraOption: string = '';

  showOptions: boolean = true;

  constructor(private store: Store<{ addOption: Section[] }>) {}

  addOption() {
    // this.option.value = !this.option.value;
    this.store.dispatch(
      new AddOptionActions.addExtraItem({
        sectionId: this.item.itemId.slice(0, 2),
        itemId: this.item.itemId.slice(0, 5),
        optionName: this.extraOption,
      })
    );
  }

  toggleShowOptions() {
    this.showOptions = !this.showOptions;
  }
}
