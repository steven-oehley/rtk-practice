import { CartIcon } from "../data/icons";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { amount, cartItems } = useSelector((store) => store.cart);
  console.log(cartItems);

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <span className="btn btn-ghost text-xl">Steve&apos;s Store</span>
      </div>
      <div>
        <button className="btn">
          <CartIcon />
          <div className="badge badge-secondary">{amount}</div>
        </button>
      </div>
    </div>
  );
};
export default Navbar;
