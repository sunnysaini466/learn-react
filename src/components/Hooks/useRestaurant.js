import { useEffect, useState } from "react";
import { Fetch_Menu_Restaurant } from "../../config";

const useRestaurant = (resID = "") => {
  const [restaurantDetails, setRestaurantDetails] = useState(null);

  // call the API
  useEffect(() => {
    getRestaurantMenu();
  }, []);

  // get the API data
  async function getRestaurantMenu() {
    const res = await fetch(Fetch_Menu_Restaurant + resID);
    const json = await res.json();
    setRestaurantDetails(json.data);
    //console.log(json.data.menu.items);
  }

  // return the data after fetching from api

  return restaurantDetails;
};

export default useRestaurant;
