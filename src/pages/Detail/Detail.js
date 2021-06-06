import React from "react";
import { useParams } from "react-router";
import "./Detail.css";

function Detail({ products }) {
  const { id } = useParams();
  const filtre = products.filter((item) => item.id === id);
  return (
    <div className="container">
      {filtre.map((item) => (
        <div className="detail-container">
          <h2>{item.name}</h2>
          <div className="detail-item">
            <img src={item.image} alt={item.title} />
            <div className="last-div">
              <span className="subTitle">{item.model}</span>
              <div>{item.description}</div>
              <div>₺{item.price}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Detail;
