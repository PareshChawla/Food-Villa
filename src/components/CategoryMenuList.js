import { IMG_CDN_URL } from "../../config";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
import NONVEG from "../assets/img/nonveg.png";
import VEG from "../assets/img/veg.png";
import EGG from "../assets/img/egg.png";

const CategoryMenuList = ({ items }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const isItemInCart = (itemId) => {
    return cartItems.some((cartItem) => cartItem.card.info.id === itemId);
  };

  const handleButtonClick = (item) => {
    if (isItemInCart(item.card.info.id)) {
      // If item is already in cart, dispatch REMOVE action
      dispatch(removeItem(item.card.info.id));
    } else {
      // If item is not in cart, dispatch ADD action
      dispatch(addItem(item));
    }
  };

  return (
    <>
      {items.map((item) => (
        <div
          className="flex-col flex md:flex-row md:w-6/12 md:mx-auto justify-between p-3 border-gray-200 border-b-2 relative items-center"
          key={item?.card?.info?.id}
        >
          <div className="text-left w-10/12 md:flex md:flex-col md:items-start md:text-left md:w-8/12">
            <div className="flex flex-row items-center">
              <h1 className="text-sm text-left font-medium md:font-medium">
                {item?.card?.info?.name}
              </h1>
              <span className="h-4 w-4 ml-2">
                {item?.card?.info?.itemAttribute?.vegClassifier === "NONVEG" ? (
                  <img src={NONVEG} />
                ) : (
                  ""
                )}
                {item?.card?.info?.itemAttribute?.vegClassifier === "EGG" ? (
                  <img src={EGG} />
                ) : (
                  ""
                )}
                {item?.card?.info?.itemAttribute?.vegClassifier === "VEG" ? (
                  <img src={VEG} />
                ) : (
                  ""
                )}
              </span>
            </div>
            <h2 className="text-xs leading-8">
              ₹
              {item?.card?.info?.price / 100 ||
                item?.card?.info?.defaultPrice / 100}
            </h2>
            <span className="text-xs text-gray-500">
              {item?.card?.info?.description}
            </span>
          </div>
          <div className="relative flex-shrink-0 mt-3 md:mt-0">
            <img
              className="h-20 w-30 rounded-md"
              src={IMG_CDN_URL + item?.card?.info?.imageId}
              alt="menu-img"
            />
            <div className="absolute inset-10 flex my-6 justify-center">
              <button
                className="w-24 h-6 p-2 text-center flex items-center rounded-md font-bold text-green-500 font-mono bg-white border border-gray-400 hover:shadow-lg hover:bg-gray-100"
                onClick={() => handleButtonClick(item)}
              >
                {isItemInCart(item.card.info.id) ? "REMOVE" : "ADD"}
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CategoryMenuList;
