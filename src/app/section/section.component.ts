import { Component, Input, OnChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { Section } from '../interfaces';
import * as AddOptionActons from '../store/option.actions';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],
})
export class SectionComponent {
  @Input() section: Section;
  extraOption: string = '';

  showItems: boolean = true;

  constructor(private store: Store<Section[]>) {}

  toggleShowItems() {
    this.showItems = !this.showItems;
  }

  onRequestCall() {
    this.store.dispatch(
      new AddOptionActons.requestCall({ sectionId: this.section.sectionId })
    );
    console.log(this.section.requestedCall)
  }
}
