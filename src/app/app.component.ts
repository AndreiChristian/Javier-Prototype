import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Section } from './interfaces';
import { SectionService } from './section.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  sections: any = [];

  constructor(
    private sectionService: SectionService,
    private store: Store<{ addOption: Section[] }>
    
  ) {}

  ngOnInit() {
    this.sections = this.sectionService.sections;
    this.store.select("addOption").subscribe(initialSections => {
      this.sections = initialSections
    })
  }
}
