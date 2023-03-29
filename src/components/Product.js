import React from "react";

function Product({ name, price, id, quantity, addItem, removeItem }) {
  return (
    <main
      id={id}
      className="shadow-sm shadow-gray-500 rounded-lg w-96 py-3 px-3 my-3 hover:scale-105"
    >
      <section className="flex items-end space-x-36 text-black">
        <div>
          <div className="flex flex-col space-y-1">
            <h1 className="font-semibold text-xl">{name}</h1>
            <h3 className="text-md font-semibold">
              Price: <span className="font-semibold">{price} pp</span>
            </h3>
            <div className="flex items-center space-x-2">
              <button
                onClick={addItem}
                className="px-2 rounded-full shadow-sm shadow-gray-500 hover:bg-yellow-400"
              >
                -
              </button>
              <h2>{quantity}</h2>
              <button
                onClick={removeItem}
                className="px-2 rounded-full shadow-sm shadow-gray-500 hover:bg-yellow-400"
              >
                +
              </button>
            </div>
          </div>
        </div>

        <button className="bg-yellow-400 px-3 py-1 text-md rounded-lg">
          Add to basket
        </button>
      </section>
    </main>
  );
}

export default Product;
