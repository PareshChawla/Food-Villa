import React, { useState, useEffect } from "react";
import RestaurantCategory from "./RestaurantCategory";
import RestaurantInfo from "../../constants.js/resMenu.json";
import ShimmerRestaurantMenu from "./ShimmerRestaurantMenu";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);
  const [showShimmer, setShowShimmer] = useState(true);

  const resInfo = RestaurantInfo.data;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  useEffect(() => {
    const shimmerTimeout = setTimeout(() => {
      setShowShimmer(false);
    }, 2000);

    // Cleanup timeout to avoid memory leaks
    return () => clearTimeout(shimmerTimeout);
  }, []); // Ensure useEffect runs only once on component mount

  return (
    <div className="min-h-screen text-center my-6">
      {showShimmer && <ShimmerRestaurantMenu />}
      {!showShimmer && (
        <>
          <h1 className="font-bold text-2xl">{name}</h1>
          <h2 className="font-medium text-md my-3">
            {cuisines.join(", ")} - {costForTwoMessage}
          </h2>
          {categories.map((category, index) => (
            <RestaurantCategory
              key={category?.card?.card?.title}
              data={category?.card?.card}
              setShowIndex={() => {
                // Toggle the state explicitly based on the current showItems value
                setShowIndex((prevIndex) => (prevIndex === index ? null : index));
              }}
              showItems={index === showIndex ? true : false}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default RestaurantMenu;
