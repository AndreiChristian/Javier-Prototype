import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  sections: string[] = [
    'FOOD & BEVERAGE',
    ' LINEN & TOILETRIES',
    'FITNESS',
    'TEMPERATURE',
    'ENTERTAINMENT',
    'SECURITY',
    'SERVICES',
    'OTHERS',
  ];
}
