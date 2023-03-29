import "./App.css";
import Product from "./components/Product";
import Basket from "./components/Basket";

function App() {
  const items = [
    {
      name: "A",
      id: 1,
      price: 50,
      quantity: 1,
    },
    {
      name: "B",
      id: 2,
      price: 30,
      quantity: 1,
    },
    {
      name: "C",
      id: 3,
      price: 20,
      quantity: 1,
    },
    {
      name: "D",
      id: 4,
      price: 15,
      quantity: 1,
    },
  ];

  const addItem = () => {};

  const removeItem = () => {};

  return (
    <main className="w-screen h-screen ">
      <h1 className="text-center text-4xl font-bold py-5">Checkout System</h1>
      <section className="flex justify-center items-center">
        <div className="flex flex-col ">
          <h1 className="text-3xl text-black font-semibold py-3">Items</h1>
          {items.map(({ name, price, quantity, id }) => (
            <Product
              name={name}
              key={id}
              id={id}
              price={price}
              quantity={quantity}
              addItem={addItem}
              removeItem={removeItem}
            />
          ))}
        </div>
        <Basket />
      </section>
    </main>
  );
}

export default App;
