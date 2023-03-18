import * as AddOptionActions from './option.actions';
import { initialSectionState } from './initial-section.state';
import { Section } from '../interfaces';

export function addOptionReducer(
  state: Section[] = initialSectionState,
  action: AddOptionActions.optionTypes
) {
  switch (action.type) {
    // we will get the index of the section and the index of the item and the index of the
    // and then we will update the item
    case AddOptionActions.SELECT_OPTION:
      console.log(action.payload);
      return state.map((section) => {
        if (section.sectionId !== action.payload.sectionId) {
          return section;
        }
        return {
          ...section,
          items: section.items.map((item) => {
            if (item.itemId !== action.payload.itemId) {
              return item;
            }
            return {
              ...item,
              options: item.options.map((option) => {
                if (option.optionId !== action.payload.optionId) {
                  return option;
                }
                return {
                  ...option,
                  selected: !option.selected,
                };
              }),
            };
          }),
        };
      });
    case AddOptionActions.SELECT_IMPORTANT:
      return state.map((section) => {
        if (section.sectionId !== action.payload.sectionId) {
          return section;
        }
        return {
          ...section,
          items: section.items.map((item) => {
            if (item.itemId !== action.payload.itemId) {
              return item;
            }
            return {
              ...item,
              options: item.options.map((option) => {
                if (option.optionId !== action.payload.optionId) {
                  return option;
                }
                return {
                  ...option,
                  important: !option.important,
                  selected: true,
                };
              }),
            };
          }),
        };
      });

    case AddOptionActions.ADD_EXTRA_ITEM:
      return state.map((section) => {
        if (section.sectionId !== action.payload.sectionId) {
          return section;
        }
        return {
          ...section,
          items: section.items.map((item) => {
            if (item.itemId !== action.payload.itemId) {
              return item;
            }
            return {
              ...item,
              options: [
                ...item.options,
                {
                  optionId: `${item.itemId}-${item.options.length + 1}`,
                  optionName: action.payload.optionName,
                  selected: true,
                  important: false,
                },
              ],
            };
          }),
        };
      });
    case AddOptionActions.REQUEST_CALL:
      return state.map((section) => {
        if (section.sectionId !== action.payload.sectionId) {
          return section;
        }
        return {
          ...section,
          requestedCall: !section.requestedCall,
        };
      });

    default:
      return state;
  }
}
