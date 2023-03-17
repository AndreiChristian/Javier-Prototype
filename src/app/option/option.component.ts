import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css']
})
export class OptionComponent {
  @Input() option: any;


  onSelectImportant() {
    this.option.important = !this.option.important;
  }
}
