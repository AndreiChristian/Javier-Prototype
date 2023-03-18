import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Section } from 'src/app/interfaces';

@Component({
  selector: 'app-section-sidebar',
  templateUrl: './section-sidebar.component.html',
  styleUrls: ['./section-sidebar.component.css'],
})
export class SectionSidebarComponent {
  sections: Section[] = [];

  constructor(private store: Store<{ addOption: Section[] }>) {}

  ngOnInit() {
    // this.sections = this.sectionService.sections;
    this.store.select('addOption').subscribe((initialSections) => {
      this.sections = initialSections;
    });
  }
}
