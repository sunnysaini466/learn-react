import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const params = useParams();

  const [restaurantDetails, setRestaurantDetails] = useState(null);

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  async function getRestaurantMenu() {
    const res = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=28.73057979999999&lng=77.7758825&menuId=" +
        params.id
    );
    const json = await res.json();
    setRestaurantDetails(json.data);
    console.log(json.data.menu.items);
  }

  return !restaurantDetails ? (
    <Shimmer />
  ) : (
    <>
      <div className="menu-card">
        <img
          alt={restaurantDetails.name}
          src={IMG_CDN_URL + restaurantDetails.cloudinaryImageId}
        />
        <h2>Restaurant id : {params.id}</h2>
        <h2>Restaurant name : {restaurantDetails.name}</h2>
        <h3>{restaurantDetails.area + " , " + restaurantDetails.city}</h3>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {Object.values(restaurantDetails?.menu?.items).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default RestaurantMenu;
