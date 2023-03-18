import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],
})
export class SectionComponent {
  @Input() section: any;
  extraOption: string = '';

  showItems: boolean = true;

  toggleShowItems() {
    this.showItems = !this.showItems;
  }

}
