import logo from "./logo.svg";
import "./App.css";
import Product from "./components/Product";
import Basket from "./components/Basket";

function App() {
  const items = [
    {
      name: A,
      id: 1,
      price: 50,
      image:
        "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YXBwbGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: B,
      id: 2,
      price: 30,
      image:
        "https://images.unsplash.com/photo-1514756331096-242fdeb70d4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: C,
      id: 3,
      price: 20,
      image:
        "https://images.unsplash.com/photo-1572539280469-9c738c59964d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8a2l3aXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: D,
      id: 4,
      price: 15,
      image:
        "https://images.unsplash.com/photo-1590502593747-42a996133562?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bGVtb25zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];

  return (
    <main className="app">
      <h1>Checkout System</h1>
      <Product />
      <Basket />
    </main>
  );
}

export default App;
