import React from "react";
import "./Favorite.css";
import FavoriteRemove from "../Buttons/Favorite/FavoriteRemove";

function Favorite({ favorites, onRemoveProductFromFavorite }) {
  return (
    <div className="container">
      {favorites.length === 0 &&  <div className="fav-list-none">Favori Listeniz Boş!</div>}

      {favorites.map((favorite) => (
        <div key={favorite.id} className="card">
          <h2>{favorite.name}</h2>
          <img src={favorite.image} alt={favorite.title} />
          <span className="subTitle">{favorite.model}</span>
          <div className="text">{favorite.description}</div>
          <div className="addRemove">
            <FavoriteRemove
              favoriteRemoveFunc={() => onRemoveProductFromFavorite(favorite)}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Favorite;
