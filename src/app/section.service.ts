import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SectionService {
  sections = [
    {
      id: 's1',
      name: 'Food ',
      items: [
        // allergies
        {
          id: 's1i1',
          name: 'Alergies',
          options: [
            {
              id: 's1i1o1',
              name: 'Gluten',
              value: false,
              important: false,
            },
            {
              id: 's1i1o2',
              name: 'Lactose',
              value: false,
              important: false,
            },
            {
              id: 's1i1o3',
              name: 'Nuts',
              value: false,
              important: false,
            },
            {
              id: 's1i1o4',
              name: 'Eggs',
              value: false,
              important: false,
            },
            {
              id: 's1i1o5',
              name: 'Soy',
              value: false,
              important: false,
            },
            {
              id: 's1i1o6',
              name: 'Fish',
              value: false,
              important: false,
            },
            {
              id: 's1i1o7',
              name: 'Shellfish',
              value: false,
              important: false,
            },
          ],
        },
        // diet
        {
          id: 's1i2',
          name: 'Diet',
          options: [
            {
              id: 's1i2o1',
              name: 'Vegetarian',
              value: false,
              important: false,
            },
            {
              id: 's1i2o2',
              name: 'Vegan',
              value: false,
              important: false,
            },
            {
              id: 's1i2o3',
              name: 'Kosher',
              value: false,
              important: false,
            },
            {
              id: 's1i2o4',
              name: 'Halal',
              value: false,
              important: false,
            },
            {
              id: 's1i2o5',
              name: 'Paleo',
              value: false,
              important: false,
            },
          ],
        },
      ],
    },
  ];
}
