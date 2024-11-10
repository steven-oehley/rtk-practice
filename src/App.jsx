import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import Total from "./components/Total";

const App = () => {
  return (
    <header className="max-w-5xl mx-auto">
      <Navbar />
      <CartContainer />
      <Total />
    </header>
  );
};
export default App;
