import React, { useEffect, useState } from "react";
import BasketProduct from "./BasketProduct";

function Basket({ basketItems }) {
  const [totalPrice, setTotalPrice] = useState(null);
  const [totalQty, setTotalQty] = useState(null);
  const [groupedItems, setGroupedItems] = useState([]);
  const [disc3, setDisc3] = useState(false);
  const [disc2, setDisc2] = useState(false);
  const [priceDisc3, setPriceDisc3] = useState(null);
  const [priceDisc2, setPriceDisc2] = useState(null);
  const [price, setPrice] = useState(null);

  useEffect(() => {
    const total = basketItems?.reduce((tot, item) => {
      let t = item.price * item.quantity;
      if (item.name === "A" && item.quantity % 3 == 0) {
        let discFor3 = 20;
        let case1 = t - discFor3;
        setDisc3(true);
        return (tot += case1);
      }
      if (item.name === "B" && item.quantity % 2 == 0) {
        let discFor2 = 15;
        let case2 = t - discFor2;
        setDisc2(true);
        return (tot += case2);
      }
      if (item) {
        return (tot += t);
      }
    }, 0);

    setTotalPrice(total);

    const totQty = basketItems?.reduce((tot, item) => {
      return (tot += item.quantity);
    }, 0);

    setTotalQty(totQty);

    const cart = {};
    basketItems.map((item) => {
      if (cart[item.name]) {
        cart[item.name].quantity += item.quantity;
      } else {
        cart[item.name] = {
          price: item.price,
          quantity: item.quantity,
          id: item.id,
        };
      }
    });

    setGroupedItems(cart);
  }, [basketItems]);

  return (
    <main>
      <section className="mx-6">
        <div className="flex justify-center items-baseline py-4">
          <h1 className="text-3xl text-black font-semibold ">Summary</h1>
          <h2 className="text-black text-2xl font-semibold px-5">
            {totalQty} items
          </h2>
        </div>
        <div>
          {Object.entries(groupedItems).map(([key, item]) => (
            <BasketProduct
              name={key}
              price={item.price}
              quantity={item.quantity}
              id={item.id}
              key={key}
              disc2={disc2}
              disc3={disc3}
            />
          ))}
        </div>
        <div className={!totalPrice ? "hidden" : "inline"}>
          <h1 className="text-lg font-bold">
            Order total:{" "}
            <span className={disc2 || disc3 ? "text-red-500" : "text-black"}>
              {totalPrice} pp
            </span>
          </h1>
        </div>
      </section>
    </main>
  );
}

export default Basket;
