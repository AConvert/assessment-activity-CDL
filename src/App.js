import "./App.css";
import Product from "./components/Product";
import Basket from "./components/Basket";

function App() {
  const items = [
    {
      name: "Apple",
      id: 1,
      price: 50,
      quantity: 1,
    },
    {
      name: "Pear",
      id: 2,
      price: 30,
      quantity: 1,
    },
    {
      name: "Kiwi",
      id: 3,
      price: 20,
      quantity: 1,
    },
    {
      name: "Lemon",
      id: 4,
      price: 15,
      quantity: 1,
    },
  ];

  return (
    <main>
      <h1 className="text-center">Checkout System</h1>
      {items.map(({ name, price, quantity, id }) => (
        <Product
          name={name}
          key={id}
          id={id}
          price={price}
          quantity={quantity}
        />
      ))}
      <Basket />
    </main>
  );
}

export default App;
