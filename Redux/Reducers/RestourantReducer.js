import { GETALLRESTOURANTS } from "../Actions/Types";

const initialStates = {
  restourants: null,
};

const restourantReducer = (state = initialStates, action) => {
  switch (action.type) {
    case GETALLRESTOURANTS: {
      return { ...state, restourants: action.payload };
    }
    default:
      return state;
  }
};

export default restourantReducer;
