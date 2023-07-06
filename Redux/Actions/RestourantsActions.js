import { getAllRestourants } from "../../APIServices/RestourantService";
import { GETALLRESTOURANTS } from "./Types";

export const fetchAllRestourants = (dispatch, activeTab, currentCity) => {
  getAllRestourants(activeTab, currentCity).then((res) =>
    dispatch({ type: GETALLRESTOURANTS, payload: res })
  );
};
