import React from "react";

function Product({ name, price, id, quantity }) {
  return (
    <main id={id}>
      <section className="flex items-center text-black">
        <div>
          <div>
            <h1>{name}</h1>
            <h3>Price: {price}</h3>
            <h2>{quantity}</h2>
          </div>
        </div>

        <button>Add to basket</button>
      </section>
    </main>
  );
}

export default Product;
