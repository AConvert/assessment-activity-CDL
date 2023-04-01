import React, { useEffect, useState } from "react";
import Subtotal from "./Subtotal";

function Basket({ basketItems }) {
  const [totalPrice, setTotalPrice] = useState("");
  const [newCart, setNewCart] = useState([]);

  useEffect(() => {
    const total = basketItems?.reduce((tot, item) => {
      return (tot += item.price);
    }, 0);

    setTotalPrice(total);

    const cart = [];
    basketItems.map((item) => {
      if (cart[item.name]) {
        cart[item.name].quantity++;
      } else {
        cart[item.name] = { price: item.price, quantity: item.quantity };
      }
    });

    newCart(cart);
  }, [basketItems]);

  return (
    <main>
      <section>
        <Subtotal />
      </section>
    </main>
  );
}

export default Basket;
