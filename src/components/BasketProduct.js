import React from "react";

function BasketProduct({ name, price, quantity, id }) {
  return (
    <main
      id={id}
      className="w-full relative p-4 my-1 shadow-sm shadow-gray-500"
    >
      <section className="flex items-center justify-evenly relative">
        <div>
          <h1 className="text-md font-semibold">Name</h1>
          <h2 className="text-sm">{name}</h2>
        </div>
        <div>
          <h1 className="text-md font-semibold">Price</h1>
          <h2 className="text-sm">{price}</h2>
        </div>
        <div>
          <h1 className="text-md font-semibold">Quantity</h1>
          <h2 className="text-sm">{quantity}</h2>
        </div>
      </section>
    </main>
  );
}

export default BasketProduct;
