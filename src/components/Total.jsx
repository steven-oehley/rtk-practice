import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";

const Total = () => {
  const { total } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between items-center mt-6">
      <div className="flex  text-accent text-2xl gap-2">
        <p>Total:</p>
        <p>R{total.toFixed(2)}</p>
      </div>
      <button
        className="btn btn-outline btn-warning"
        onClick={() => dispatch(clearCart())}
      >
        Clear Cart
      </button>
    </div>
  );
};
export default Total;
