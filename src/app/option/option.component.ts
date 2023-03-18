import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Option, Section } from '../interfaces';

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
  }

  constructor(private store: Store<{ addOption: Section[] }>) {}

  ngOnInit() {
    
    this.store.select('addOption').subscribe((stateSections) => {
      console.log(stateSections[+this.sectionItemId[1]-1].items[+this.sectionItemId[4]-1].options[+this.option.optionId[7]-1]);
    });
  }
}
