import React from "react";

function Product({
  name,
  price,
  id,
  quantity,
  incrementQty,
  decrementQty,
  addToBasket,
}) {
  return (
    <main
      id={id}
      className="shadow-sm relative shadow-gray-500 rounded-lg w-96 py-3 px-3 my-3 hover:scale-105"
    >
      {id === 1 && (
        <div className="absolute z-2 top-2 right-2">
          <h1 className="text-xs text-white rounded-sm bg-red-500 p-2">
            Buy 3, get 20% discount
          </h1>
        </div>
      )}
      {id === 2 && (
        <div className="absolute z-2 top-2 right-2">
          <h1 className="text-xs text-white bg-red-500 rounded-sm p-2">
            Buy 2, get 25% discount
          </h1>
        </div>
      )}
      <section className="flex items-end space-x-36 text-black">
        <div>
          <div className="flex flex-col space-y-1">
            <h1 className="font-semibold text-xl">{name}</h1>
            <h3 className="text-md font-semibold">
              Price: <span className="font-semibold">{price} pp</span>
            </h3>
            <div className="flex items-center space-x-2">
              <button
                onClick={decrementQty}
                className="px-2 rounded-full shadow-sm shadow-gray-500 hover:bg-yellow-400"
              >
                -
              </button>
              <h2>{quantity}</h2>
              <button
                onClick={incrementQty}
                className="px-2 rounded-full shadow-sm shadow-gray-500 hover:bg-yellow-400"
              >
                +
              </button>
            </div>
          </div>
        </div>

        <button
          onClick={addToBasket}
          className="bg-yellow-400 px-3 py-1 text-md rounded-lg"
        >
          Add to basket
        </button>
      </section>
    </main>
  );
}

export default Product;
