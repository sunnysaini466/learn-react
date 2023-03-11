import { useState, useEffect } from "react";
import { Fetch_All_Restaurant } from "../../config";

const useGetAllRestaurant = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => { 
    //console.log("calls when dependency is changed");
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(Fetch_All_Restaurant);
    const json = await data.json();
    console.log(json); 
    setFilteredRestaurants(json?.data?.cards[0]?.data?.data?.cards);
    setAllRestaurants(json?.data?.cards[0]?.data?.data?.cards);
  }
  return [allRestaurants, filteredRestaurants,setAllRestaurants,setFilteredRestaurants];
};

export default useGetAllRestaurant;
