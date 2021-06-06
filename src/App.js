import React, { useState, useEffect } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home/Home";
import Detail from "./pages/Detail/Detail";
import Contact from "./pages/Contact/Contact";
import Favorite from "./components/Favorite/Favorite";
import Basket from "./components/Basket/Basket";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    axios
      .get("https://60ba13a180400f00177b797d.mockapi.io/products/products")
      .then((response) => setProducts(response.data));
  }, []);

  const [products, setProducts] = useState([]);
  const [basketProducts, setBasketProducts] = useState([]);
  const [favoriteProducts, setFavoriteProducts] = useState([]);

  const addProductInBasket = (product) => {
    const checkControl = basketProducts.find((x) => x.id === product.id);
    if (checkControl) {
      setBasketProducts(
        basketProducts.map((x) =>
          x.id === product.id
            ? { ...checkControl, quantity: checkControl.quantity + 1 }
            : x
        )
      );
    } else {
      setBasketProducts([...basketProducts, { ...product, quantity: 1 }]);
    }
  };

  const removeProductFromBasket = (product) => {
    const checkControl = basketProducts.find((item) => item.id === product.id);
    if (checkControl) {
      if (checkControl.quantity === 0) {
        checkControl.quantity -= 1;
        setBasketProducts([
          ...basketProducts.filter((item) => item.id !== product.id),
          checkControl,
        ]);
      } else {
        setBasketProducts([
          ...basketProducts.filter((item) => item.id !== product.id),
        ]);
      }
    }
  };

  const addFavoriteProductInBasket = (product) => {
    const checkControl = favoriteProducts.find((x) => x.id === product.id);
    if (!checkControl) {
      setFavoriteProducts([
        ...favoriteProducts,
        { ...product, favorite: true },
      ]);
    }

    alert("Favorilere Eklendi!");
  };

  const removeFavoriteProductInBasket = (product) => {
    const checkControl = favoriteProducts.find((x) => x.id === product.id);
    if (checkControl) {
      setFavoriteProducts([
        ...favoriteProducts.filter((item) => item.id !== product.id),
      ]);
    }
  };
  useEffect(() => {
    console.log(favoriteProducts);
  }, [favoriteProducts]);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Nav />
            <Basket basketProducts={basketProducts} />
            <Home
              products={products}
              basketProducts={basketProducts}
              onAddProductInBasket={addProductInBasket}
              onRemoveProductFromBasket={removeProductFromBasket}
              onAddFavoriteInBasket={addFavoriteProductInBasket}
            />
          </Route>

          <Route path="/favorite">
            <Nav />
            <Basket basketProducts={basketProducts} />
            <Favorite
              favorites={favoriteProducts}
              onRemoveProductFromFavorite={removeFavoriteProductInBasket}
            />
          </Route>

          <Route path="/contact">
            <Nav />
            <Contact />
          </Route>
          <Route path="/:id">
            <Nav />
            <Basket basketProducts={basketProducts} />
            <Detail products={products} />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
