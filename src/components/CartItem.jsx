import { useDispatch } from "react-redux";
import { increment, decrement } from "../features/cart/cartSlice";

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();

  return (
    <div className="card card-side bg-base-100 shadow-xl h-40 flex">
      <figure>
        <img src={cartItem.img} alt={cartItem.title} className="w-20 h-20" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-primary">{cartItem.title}</h2>
        <p>R{cartItem.price}</p>
        <p>Quantity: {cartItem.amount}</p>
      </div>
      <div className="flex gap-4 items-center justify-end pr-4">
        <button
          className="btn btn-secondary"
          disabled={cartItem.amount === 0}
          onClick={() => dispatch(decrement(cartItem.id))}
        >
          -
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => dispatch(increment(cartItem.id))}
        >
          +
        </button>
      </div>
    </div>
  );
};
export default CartItem;
