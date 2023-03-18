import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Option, Section } from '../interfaces';
import * as AddOptionActions from '../store/option.actions';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css'],
})
export class OptionComponent implements OnInit {
  @Input() option: Option;
  @Input() sectionItemId: string;
  options: Option;

  onSelectImportant() {
    // this.option.important = !this.option.important;
  }

  onSelectOption() {
    // this.option.value = !this.option.value;
    this.store.dispatch(
      new AddOptionActions.addOption({
        sectionId: this.sectionItemId.slice(0, 2),
        itemId: this.sectionItemId.slice(0, 5),
        optionId: this.option.optionId.slice(0, 8),
      })
    );
  }

  constructor(private store: Store<{ addOption: Section[] }>) {}

  ngOnInit() {
    // this.store.select('addOption').subscribe((stateSections) => {
    //     stateSections[+this.sectionItemId[1] - 1].items[
    //       +this.sectionItemId[4] - 1
    //     ].options[+this.option.optionId[7] - 1]
    // });
  }
}
