import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SectionService {
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
