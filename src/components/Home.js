import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { restaurantList } from "../config";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useGetAllRestaurant from "./Hooks/useGetAllRestaurant";
import { Fetch_All_Restaurant } from "../config";
import useIsOnline from "./Hooks/useIsOnline";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );

  return filterData;
}

const Home = () => {
  const [searchText, setSearchText] = useState("");
  // const [allRestaurants, setAllRestaurants] = useState([]);
  // const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  //this is custom hook calling
  const [
    allRestaurants,
    filteredRestaurants,
    setAllRestaurants,
    setFilteredRestaurants,
  ] = useGetAllRestaurant();

  //this is direct API calling in component
  // useEffect(() => {
  //   getRestaurants();
  // }, []);

  // async function getRestaurants() {
  //   const data = await fetch(Fetch_All_Restaurant);
  //   const json = await data.json();
  //   console.log(json);
  //   setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  //   setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  // }

  if (!allRestaurants) return null;

  //if (filteredRestaurants?.length === 0) return <h1>No Restaurant founds</h1>;

  const isOnline = useIsOnline();

  if (!isOnline)
    return (
      <h2>No Internet Connection. Please Check Your Internet Connection </h2>
    );

  //conditional rendering
  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search.."
          name="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />

        <button
          type="submit"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="res-card">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <RestaurantCard {...restaurant.data} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Home;
