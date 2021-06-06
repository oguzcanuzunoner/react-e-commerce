import React from "react";
import "./Home.css";
import AddButton from "../../components/Buttons/Add/Add";
import RemoveButton from "../../components/Buttons/Remove/Remove";
import FavoriteButton from "../../components/Buttons/Favorite/Favorite";
import DetailButton from "../../components/Buttons/Detail/Detail";
import { Link } from "react-router-dom";

function Home({
  products,
  onAddProductInBasket,
  onRemoveProductFromBasket,
  onAddFavoriteInBasket,
}) {
  return (
    <div className="container">
      {products.map((product) => (
        <div key={product.id} className="card">
          <h2>{product.name}</h2>
          <img src={product.image} alt={product.title} />
          <span className="subTitle">{product.model}</span>
          <div className="text">{product.description}</div>
          <div className="text"></div>
          <div className="addRemove">
            <RemoveButton
              removeFunc={() => onRemoveProductFromBasket(product)}
            />
            <AddButton addFunc={() => onAddProductInBasket(product)} />
            <FavoriteButton
              favoriteFunc={() => onAddFavoriteInBasket(product)}
            />
            <Link to={`/${product.id}`}><DetailButton>Detay İçin Tıklayınız</DetailButton></Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
