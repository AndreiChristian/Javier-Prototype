import { Section } from '../interfaces';

export const initialSectionState: Section[] = [
  {
    sectionId: 's1',
    sectionName: 'Food',
    touched: false,
    requestedCall: false,
    configureLater: false,
    items: [
      {
        itemId: 's1-i1',
        itemName: 'Allergies',
        options: [
          {
            optionId: 's1-i1-o1',
            optionName: 'Gluten',
            selected: false,
            important: false,
          },
          {
            optionId: 's1-i1-o2',
            optionName: 'Lactose',
            selected: false,
            important: false,
          },
          {
            optionId: 's1-i1-o3',
            optionName: 'Nuts',
            selected: false,
            important: false,
          },
          {
            optionId: 's1-i1-o4',
            optionName: 'Eggs',
            selected: false,
            important: false,
          },
          {
            optionId: 's1-i1-o5',
            optionName: 'Fish',
            selected: false,
            important: false,
          },
          {
            optionId: 's1-i1-o6',
            optionName: 'Shellfish',
            selected: false,
            important: false,
          },
          {
            optionId: 's1-i1-o7',
            optionName: 'Soy',
            selected: false,
            important: false,
          },
        ],
      },
      {
        itemId: 's1-i2',
        itemName: 'Dietary Preferences',
        options: [
          {
            optionId: 's1-i2-o1',
            optionName: 'Vegetarian',
            selected: false,
            important: false,
          },
          {
            optionId: 's1-i2-o2',
            optionName: 'Vegan',
            selected: false,
            important: false,
          },
          {
            optionId: 's1-i2-o3',
            optionName: 'Kosher',
            selected: false,
            important: false,
          },
          {
            optionId: 's1-i2-o4',
            optionName: 'Halal',
            selected: false,
            important: false,
          },
          {
            optionId: 's1-i2-o5',
            optionName: 'Paleo',
            selected: false,
            important: false,
          },
          {
            optionId: 's1-i2-o6',
            optionName: 'Pescatarian',
            selected: false,
            important: false,
          },
        ],
      },
    ],
  },
  {
    sectionId: 's2',
    sectionName: 'Beverages',
    touched: false,
    requestedCall: false,
    configureLater: false,
    items: [
      {
        itemId: 's2-i1',
        itemName: 'Water',
        options: [
          {
            optionId: 's2-i1-o1',
            optionName: 'Still',
            selected: false,
            important: false,
          },
          {
            optionId: 's2-i1-o2',
            optionName: 'Sparkling',
            selected: false,
            important: false,
          },
        ],
      },
      {
        itemId: 's2-i2',
        itemName: 'Coffee',
        options: [
          {
            optionId: 's2-i2-o1',
            optionName: 'Espresso',
            selected: false,
            important: false,
          },
          {
            optionId: 's2-i2-o2',
            optionName: 'Cappuccino',
            selected: false,
            important: false,
          },
          {
            optionId: 's2-i2-o3',
            optionName: 'Latte',
            selected: false,
            important: false,
          },
          {
            optionId: 's2-i2-o4',
            optionName: 'Americano',
            selected: false,
            important: false,
          },
          {
            optionId: 's2-i2-o5',
            optionName: 'Mocha',
            selected: false,
            important: false,
          },
        ],
      },
    ],
  },
];
