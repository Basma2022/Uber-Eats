import { ADDITEM, FILTERITEMS, REMOVEITEM } from "./Types";

export const AddItem = (dispatch, item) => {
  dispatch({ type: ADDITEM, payload: item });
};

export const RemoveItem = (dispatch, item) => {
  dispatch({ type: REMOVEITEM, payload: item });
};
