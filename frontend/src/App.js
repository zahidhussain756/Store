import React, { useEffect, useState } from "react";
import Header from "./Component/Header";
import Form from "./Component/Form";
import { Home } from "./Component/Home";
import Footer from "./Component/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Store from "./Component/Store";
import Contact from "./Component/Contact";

import { Login } from "./Component/Login";
import { Signup } from "./Component/Signup";
import { Forgetpassword } from "./Component/Forgetpassword";
// import data from "./data";
import Cart from "./Component/Cart";
// import Dashboard from "./Component/Dashboard";

const App = () => {
  // const { product } = data;
  const [CartItem, setCartItem] = useState([]);

  // function Local(CartItem){
  //   localStorage.setItem('CartItem',JSON.stringify(CartItem))
  // }
  const onAdd = (data) => {
    //assuming there are some items already in cart
    const exist = CartItem.find((x) => x.id === data._id);
    if (exist) {
      setCartItem(
        CartItem.map((x) =>
          x.id === data._id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
      console.log(CartItem);
    } else {
      //adding new items
      setCartItem([...CartItem, { ...data, qty: 1 }]);
      console.log(CartItem);
    }
    // Local(CartItem)
  };
  const del = (data) => {
    const exist = CartItem.find((x) => x.id === data._id);
    if (exist)
      if (exist.qty === 1) {
        console.log("Hello");
      } else {
        setCartItem(
          CartItem.map((x) =>
            x.id === data._id ? { ...exist, qty: exist.qty - 1 } : x
          )
        );
        console.log(CartItem);
      }
    // Local(CartItem)
  };
  const onRemove = (data) => {
    const exist = CartItem.find((x) => x.id === data.id);
    if (exist.qty >= 1) {
      setCartItem(CartItem.filter((x) => x.id !== data.id));
    } else {
      setCartItem(
        CartItem.map((x) =>
          x.id === data.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
    // Local(CartItem)
  };

  // useEffect(() => {
  //   const savedCart = JSON.parse(localStorage.getItem("CartItem"));
  //   if (savedCart) {
  //     setCartItem(savedCart);
  //   }
  // },[]);
  const [data, setData] = useState([]);
  const fetchApi = async () => {
    var value = await fetch("http://localhost:6100/show");
    value = await value.json();
    setData(value);
  };
  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div>
      <Router>
        <Header Cart={CartItem.length} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Form />} />
          <Route path="/store" element={<Store data={data} onAdd={onAdd} />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/cart"
            element={
              <Cart
                CartItem={CartItem}
                del={del}
                onAdd={onAdd}
                onRemove={onRemove}
              />
            }
          />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/forgetpassword" element={<Forgetpassword />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
};

export default App;
