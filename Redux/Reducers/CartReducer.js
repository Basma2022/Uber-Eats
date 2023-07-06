import { ADDITEM, REMOVEITEM } from "../Actions/Types";

const initialStates = {
  // selectedItems: new Map(["", {}]),
  items: [],
  filteredItems: [],
  restourantTotalPrice: [],
};

const cartReducer = (state = initialStates, action) => {
  switch (action.type) {
    case ADDITEM: {
      var found = false;
      state.restourantTotalPrice.forEach((rest) => {
        if (rest.restourantName === action.payload.restourantName) {
          rest.totalPrice += action.payload.price;
          found = true;
        }
      });
      if (!found) {
        const restourantTotalPrice = {
          restourantName: action.payload.restourantName,
          totalPrice: action.payload.price,
        };
        state.restourantTotalPrice.push(restourantTotalPrice);
      }

      return {
        ...state,
        items: [...state.items, action.payload],
        // totalPrice: state.totalPrice + action.payload.price,
      };
    }
    case REMOVEITEM: {
      state.restourantTotalPrice.forEach((rest) => {
        if (rest.restourantName === action.payload.restourantName)
          rest.totalPrice -= action.payload.price;
      });

      return {
        ...state,
        items: state.items.filter(
          (item) =>
            item.title !== action.payload.title ||
            item.restourantName !== action.payload.restourantName
        ),

        // totalPrice: state.totalPrice - action.payload.price,
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
