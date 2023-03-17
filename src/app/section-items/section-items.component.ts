import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-items',
  templateUrl: './section-items.component.html',
  styleUrls: ['./section-items.component.css'],
})
export class SectionItemsComponent {
  @Input() item: any;
  extraOption: string = '';

  showOptions: boolean = false;

  addOption() {
    this.item.options.push({
      id: `s3i1o${this.item.options.length + 1}`,
      name: this.extraOption,
      value: true,
      important: false,
    });
    this.extraOption = '';
  }

  toggleShowOptions() {
    this.showOptions = !this.showOptions;
  }
}
