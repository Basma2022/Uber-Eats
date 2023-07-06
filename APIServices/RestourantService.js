import { APIKEY, APIURL } from "../Constants/APIData";

export const getAllRestourants = (activeTab, currentCity) => {
  const url = APIURL + currentCity;
  const apiOptions = {
    headers: {
      Authorization: `Bearer ${APIKEY}`,
    },
  };

  return fetch(url, apiOptions)
    .then((res) => res.json())
    .then((result) =>
      result.businesses.filter((business) =>
        business.transactions.includes(activeTab.toLowerCase())
      )
    );
};
