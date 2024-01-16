import { useDispatch, useSelector } from "react-redux";
import CategoryMenuList from "./CategoryMenuList";
import { clearCart, removeItem } from "../utils/cartSlice";
import EmptyCart from "../assets/img/food-cart.jpg";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="min-h-screen text-center m-3 p-3">
      {cartItems.length === 0 ? (
        <div className="flex flex-col justify-center items-center py-10 md:m-6 md:p-6 lg:py-20">
          <img
            className="h-80 w-80 md:h-80 md:w-80"
            src={EmptyCart}
            alt="empty-cart"
          />
          <h1 className="font-bold text-2xl">Your cart is empty</h1>
          <p className="text-sm mt-3">
            You can go to home page to view more restaurants
          </p>
        </div>
      ) : (
        <>
          <h1 className="text-xl md:text-2xl font-bold mb-4 md:mb-8">Cart</h1>
          <div className="border border-gray-500 w-10/12 mx-auto">
            <CategoryMenuList items={cartItems} />
          </div>
          <div className="flex justify-center items-center">
            <button
              className="bg-[#DEB887] rounded-lg py-1 px-2 hover:bg-black hover:text-red-50 text-sm font-medium m-5 hover:shadow-lg"
              onClick={handleClearCart}
            >
              CLEAR
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
