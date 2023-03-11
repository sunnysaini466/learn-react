import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";
import useRestaurant from "./Hooks/useRestaurant";

const RestaurantMenu = () => {
  const params = useParams();

  const restaurantDetails = useRestaurant(params.resID);

  return !restaurantDetails ? (
    <Shimmer />
  ) : (
    <>
      <div className="menu-card">
        <img
          alt={restaurantDetails.name}
          src={IMG_CDN_URL + restaurantDetails.cloudinaryImageId}
        />
        <h2>Restaurant id : {params.resID}</h2>
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
