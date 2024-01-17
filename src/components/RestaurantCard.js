import { IMG_CDN_URL } from "../../config";
import Star from "../assets/img/star_1828884.png";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, cuisines, cloudinaryImageId, locality, avgRating } = resData;
  const cleanedName = name.replace(/\([^)]+\)/, "").trim();
  const truncatedCuisines = cuisines.slice(0, 4);

  return (
    <div
      data-testid="resCard"
      className="w-40 min-h-80 inline-block md:inline-block md:min-h-96 md:w-80 m-3 lg:m-5 p-2.5 bg-white text-center rounded-2xl border border-black shadow-xl overflow-hidden transform transition-transform hover:scale-95"
    >
      <img
        src={IMG_CDN_URL + cloudinaryImageId}
        className="h-28 md:h-40 md:w-[100%] rounded-md"
        alt={name}
      />
      <h2 className="md:text-xl font-bold mt-4 mb-4">{cleanedName}</h2>
      <h3 className="text-xs md:text-lg font-medium mb-4">
        {truncatedCuisines.join(", ")}
      </h3>
      <h4 className="text-xs mb-4 md:text-base md:font-medium">{locality} </h4>
      <div className="h-2 md:h-5 flex flex-row items-center justify-center space-x-1">
        <img
          className="h-2 w-2 md:h-4 md:w-4 bg-white"
          src={Star}
          alt="Rating"
        ></img>
        <h4 className="text-xs mb-0 md:text-base md:font-medium">
          {avgRating}
        </h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
