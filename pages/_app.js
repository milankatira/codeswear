import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import Footer from "../components/Footer";
function MyApp({ Component, pageProps }) {
  const [card, setcard] = useState({});
  const [subTotal, setsubTotal] = useState(0);

  useEffect(() => {
    try {
      if (localStorage.getItem("cart")) {
        setcard(JSON.parse(localStorage.getItem("cart")));
        saveCard(JSON.parse(localStorage.getItem("cart")));
      }
    } catch (err) {
      localStorage.clear();
    }
  }, []);

  const saveCard = (myCart) => {
    localStorage.setItem("cart", JSON.stringify(myCart));

    let subt = 0;
    let key = Object.keys(myCart);
    for (let i = 0; i < key.length; i++) {
      subt += myCart[key[i]].price * myCart[key[i]].qty;
    }
    setsubTotal(subt);
  };

  const addtoCard = (itemCode, qty, price, name, size, variant) => {
    let newCart = card;
    if (itemCode in card) {
      newCart[itemCode].qty = card[itemCode].qty + qty;
    } else {
      newCart[itemCode] = { qty: 1, price, name, size, variant };
    }

    setcard(newCart);

    saveCard(newCart);
  };

  const removeFromCard = (itemCode, qty, price, name, size, variant) => {
    let newCart = card;
    if (itemCode in card) {
      newCart[itemCode].qty = card[itemCode].qty - qty;
    }
    if (newCart[itemCode].qty === 0) {
      delete newCart[itemCode];
    }

    setcard(newCart);

    saveCard(newCart);
  };

  const clearCart = () => {
    setcard({});
    saveCard({});
  };
  return (
    <>
      <Navbar
        card={card}
        addtoCard={addtoCard}
        removeFromCard={removeFromCard}
        clearCart={clearCart}
        subTotal={subTotal}
      />
      <Component
        {...pageProps}
        card={card}
        addtoCard={addtoCard}
        removeFromCard={removeFromCard}
        clearCart={clearCart}
        subTotal={subTotal}
      />
      <Footer />
    </>
  );
}

export default MyApp;
