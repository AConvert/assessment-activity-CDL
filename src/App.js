import "./App.css";
import Product from "./components/Product";
import Basket from "./components/Basket";
import { useState } from "react";

function App() {
  const [basketItems, setBasketItems] = useState([]);

  const [gropuedItems, setGroupedItems] = useState([]);
  const [items, setItems] = useState([
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
  ]);

  const incrementQty = (itemId) => {
    items.map((item) =>
      item.id === itemId
        ? { ...item, quantity: item.quantity++ }
        : item.quantity
    );

    let newArr = [...items];
    setItems(newArr);
  };

  const decrementQty = (itemId) => {
    items.map((item) =>
      item.id === itemId && item.quantity > 0
        ? { ...item, quantity: item.quantity-- }
        : item.quantity
    );

    let newArr = [...items];
    setItems(newArr);
  };

  const addToBasket = (itemId) => {
    const addItem = items.map((item) =>
      item.id === itemId
        ? setBasketItems([
            ...basketItems,
            {
              name: item.name,
              id: item.id,
              price: item.price,
              quantity: item.quantity,
            },
          ])
        : null
    );

    const total = basketItems?.reduce((tot, item) => {
      return (tot += item.price);
    }, 0);

    console.log(total);

    // const cart = {};
    // basketItems.map((item) => {
    //   if (cart[item.name]) {
    //     setNewCart(cart[item.name].quantity++);
    //   } else {
    //     setNewCart(
    //       (cart[item.name] = { price: item.price, quantity: item.quantity })
    //     );
    //   }
    // });

    // const eachPrice = basketItems.map((item) => {
    //   let totalPrice = item.quantity;
    //   console.log(totalPrice);
    // });

    // const findDuplicate = basketItems.filter((item) => {
    //   if (item.id === itemId && item.quantity > 1) {
    //     console.log(item);
    //   }
    // });

    // setGroupedItems(findDuplicate);

    // const groupedItems = basketItems?.reduce((results, item) => {
    //   (results[item.id] = results[item.id] || []).push(item);
    //   console.log(results);
    // }, {});

    // console.log(gropuedItems);
  };

  // console.log(basketItems);

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
              incrementQty={() => incrementQty(id)}
              decrementQty={() => decrementQty(id)}
              addToBasket={() => addToBasket(id)}
            />
          ))}
        </div>

        <Basket basketItems={basketItems} />
      </section>
    </main>
  );
}

export default App;
