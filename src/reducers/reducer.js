import { TYPE } from '../constants';

const initialState = {
  totalItems: 0,
  items: [],
  selectedItems: []
};

const reducer = (state = initialState, action) => {
  const { type, items, selectedItems } = action;
  const { LOAD_DATA, LOAD_DATA_SUCCESS, LOAD_DATA_FAILURE, SET_INCREMENT, SET_DECREMENT, CHECKOUT_PRODUCT } = TYPE;

  switch(type) {
    case LOAD_DATA:
      return {
        ...state,
      };
    case LOAD_DATA_SUCCESS:
      return {
        ...state,
        items: items
      };
    case LOAD_DATA_FAILURE:
      return {
        items: [],
        totalItems: 0
      };
    case SET_INCREMENT:
      return {
        ...state,
        totalItems: state.totalItems + 1,
        selectedItems: state.selectedItems.concat(selectedItems)
      };
    case SET_DECREMENT:
      if (state.totalItems > 0) {
        return {
          ...state,
          totalItems: state.totalItems - 1
        };
      } else {
        return {
          ...state
        };
      }
    case CHECKOUT_PRODUCT:
      return {
        ...state,
        totalItems: 0,
        selectedItems: []
      };
    default:
      return state;
  }
};

export default reducer;
