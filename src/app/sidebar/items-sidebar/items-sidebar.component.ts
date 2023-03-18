import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Item, Section } from 'src/app/interfaces';

@Component({
  selector: 'app-items-sidebar',
  templateUrl: './items-sidebar.component.html',
  styleUrls: ['./items-sidebar.component.css'],
})
export class ItemsSidebarComponent implements OnInit {
  @Input() sectionId: string;

  items: Item[] = [];

  constructor(private store: Store<{ addOption: Section[] }>) {}

  ngOnInit() {
    // this.sections = this.sectionService.sections;
    // this.store.select('addOption').subscribe((initialSections) => {
    //   this.sections = initialSections;
    // });
    this.store.select('addOption').subscribe((initialSections) => {
      const section = initialSections.find(
        (section) => section.sectionId === this.sectionId
      );
      this.items = section.items;
      console.log(this.items);
    });
  }
}
