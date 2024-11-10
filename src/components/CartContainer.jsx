import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartContainer = () => {
  const { cartItems } = useSelector((store) => store.cart);
  return (
    <div className="grid grid-cols-1 space-y-4 ring-2 ring-primary rounded-md mt-8 p-4">
      {cartItems.map((cartItem) => (
        <CartItem cartItem={cartItem} key={cartItem.id} />
      ))}
    </div>
  );
};
export default CartContainer;
