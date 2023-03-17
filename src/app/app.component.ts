import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SectionService } from './section.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  sections: any = [];

  constructor(private sectionService: SectionService) {}

  ngOnInit() {
    this.sections = this.sectionService.sections;
  }
}
