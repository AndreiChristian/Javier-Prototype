import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { Section } from '../interfaces';
import * as AddOptionActons from '../store/option.actions';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],
})
export class SectionComponent implements OnInit {
  @Input() section: Section;
  extraOption: string = '';
  stateSection: any;

  showItems: boolean = true;

  constructor(private store: Store<{ addOption: Section[] }>) {}

  toggleShowItems() {
    this.showItems = !this.showItems;
  }

  onRequestCall() {
    this.store.dispatch(
      new AddOptionActons.requestCall({ sectionId: this.section.sectionId })
    );
  }

  ngOnInit(): void {
    this.store
      .select('addOption')
      .pipe(
        map((sections: Section[]) => {
          return sections.find((section) => {
            return section.sectionId === this.section.sectionId;
          });
        })
      )
      .subscribe((section) => {
        this.stateSection = section;
      });
  }
}
