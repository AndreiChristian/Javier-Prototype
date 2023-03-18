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
      {
        itemId: 's1-i3',
        itemName: 'Nuts',
        options: [
          {
            optionId: 's1-i3-o1',
            optionName: 'Almond',
            selected: false,
            important: false,
            img:true,
          },
          {
            optionId: 's1-i3-o2',
            optionName: 'Cashew',
            selected: false,
            important: false,
            img:true,
          },
          {
            optionId: 's1-i3-o3',
            optionName: 'Hazelnut',
            selected: false,
            important: false,
            img:true,
          },
          {
            optionId: 's1-i3-o4',
            optionName: 'Pecan',
            selected: false,
            important: false,
            img:true,
          },
        ]
      }
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
      {
        itemId: 's2-i3',
        itemName: 'Tea',
        options: [
          {
            optionId: 's2-i3-o1',
            optionName: 'Black',
            selected: false,
            important: false,
          },
          {
            optionId: 's2-i3-o2',
            optionName: 'Green',
            selected: false,
            important: false,
          },
          {
            optionId: 's2-i3-o3',
            optionName: 'Oolong',
            selected: false,
            important: false,
          },
          {
            optionId: 's2-i3-o4',
            optionName: 'White',
            selected: false,
            important: false,
          },
          {
            optionId: 's2-i3-o5',
            optionName: 'Herbal',
            selected: false,
            important: false,
          },
        ],
      },
      {
        itemId: 's2-i4',
        itemName: 'Red Wine',
        options: [
          {
            optionId: 's2-i4-o1',
            optionName: 'Malaga',
            selected: false,
            important: false,
          },
          {
            optionId: 's2-i4-o2',
            optionName: 'Merlot',
            selected: false,
            important: false,
          },
          {
            optionId: 's2-i4-o3',
            optionName: 'Pinot Noir',
            selected: false,
            important: false,
          },
          {
            optionId: 's2-i4-o4',
            optionName: 'Shiraz',
            selected: false,
            important: false,
          },
          {
            optionId: 's2-i4-o5',
            optionName: 'Zinfandel',
            selected: false,
            important: false,
          },
          {
            optionId: 's2-i4-o6',
            optionName: 'Cabernet Sauvignon',
            selected: false,
            important: false,
          },
        ],
      },
    ],
  },
  {
    sectionId: 's3',
    sectionName: 'Staff',
    touched: false,
    requestedCall: false,
    configureLater: false,
    items: [
      {
        itemId: 's3-i1',
        itemName: 'In-house Staff',
        options: [
          {
            optionId: 's3-i1-o1',
            optionName: 'Chef',
            selected: false,
            important: false,
          },
          {
            optionId: 's3-i1-o2',
            optionName: 'Waiter',
            selected: false,
            important: false,
          },
          {
            optionId: 's3-i1-o3',
            optionName: 'Waitress',
            selected: false,
            important: false,
          },
          {
            optionId: 's3-i1-o4',
            optionName: 'Bartender',
            selected: false,
            important: false,
          },
          {
            optionId: 's3-i1-o5',
            optionName: 'Barista',
            selected: false,
            important: false,
          },
          {
            optionId: 's3-i1-o6',
            optionName: 'Host',
            selected: false,
            important: false,
          },
        ],
      },
      {
        itemId: 's3-i2',
        itemName: 'External Staff',
        options: [
          {
            optionId: 's3-i2-o1',
            optionName: 'Guide',
            selected: false,
            important: false,
          },
          {
            optionId: 's3-i2-o2',
            optionName: 'Driver',
            selected: false,
            important: false,
          },
          {
            optionId: 's3-i2-o3',
            optionName: 'Translator',
            selected: false,
            important: false,
          },
        ],
      },
    ],
  },
];
