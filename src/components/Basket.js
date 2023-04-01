import React, { useEffect, useState } from "react";
import Subtotal from "./Subtotal";

function Basket({ basketItems }) {
  const [totalPrice, setTotalPrice] = useState([]);
  const [newCart, setNewCart] = useState([]);

  useEffect(() => {
    const cart = [];
    basketItems.map((item) => {
      if (cart[item.name]) {
        cart[item.name].quantity++;
      } else {
        cart[item.name] = { price: item.price, quantity: item.quantity };
      }
    });

    // newCart(cart);
  }, [basketItems]);

  // console.log(newCart);

  // const gropuItems = {
  //   const cart = {};
  //   basketItems.map((item) => {
  //     if (cart[item.name]) {
  //       setNewCart(cart[item.name].quantity++);
  //     } else {
  //       setNewCart(
  //         (cart[item.name] = { price: item.price, quantity: item.quantity })
  //       );
  //     }
  //   });
  // }
  return (
    <main>
      <section>
        <Subtotal />
      </section>
    </main>
  );
}

export default Basket;
