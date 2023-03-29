import logo from "./logo.svg";
import "./App.css";
import Product from "./components/Product";
import Basket from "./components/Basket";

function App() {
  const items = [
    {
      name: A,
      id: 1,
      price: 50,
    },
    {
      name: B,
      id: 2,
      price: 30,
    },
    {
      name: C,
      id: 3,
      price: 20,
    },
    {
      name: D,
      id: 4,
      price: 15,
    },
  ];

  return (
    <main className="app">
      <h1>Checkout System</h1>
      <Product />
      <Basket />
    </main>
  );
}

export default App;
