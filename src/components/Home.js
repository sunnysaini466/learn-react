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
  return (
    <>
      <div className="flex justify-center m-4">
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:bg-white"
          type="text"
          placeholder="Enter the Text Here"
          name="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />

        <button
          className="p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600 hover:bg-gray-100 hover:text-indigo-600"
          type="submit"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      {allRestaurants.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="flex flex-wrap gap-5 justify-center">
          {filteredRestaurants.map((restaurant) => {
            return (
              <Link
                className="basis-[300px] p-2.5 mb-2.5 mob:basis-[150px]"
                to={"/restaurant/" + restaurant.data.id}
                key={restaurant.data.id}
              >
                <RestaurantCard {...restaurant.data} />
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Home;
