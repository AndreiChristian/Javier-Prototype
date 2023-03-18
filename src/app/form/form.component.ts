import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Section } from '../interfaces';
import { SectionService } from '../section.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  sections: Section[] = [];

  constructor(
    private sectionService: SectionService,
    private store: Store<{ addOption: Section[] }>
    
  ) {}

  ngOnInit() {
    // this.sections = this.sectionService.sections;
    this.store.select("addOption").subscribe(initialSections => {
      this.sections = initialSections
    })
  }
}
