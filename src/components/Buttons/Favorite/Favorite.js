import React from "react";
import styled from "styled-components";

const FavoriteStyle = styled.button`
  background-color: #FFFF00;
  border: none;
  color: black;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  width: 50px;
  height: 50px;
  border-radius: 2px;
  cursor:pointer;
`;

function Favorite({ favoriteFunc }) {
  return <FavoriteStyle onClick={favoriteFunc}>Favori</FavoriteStyle>;
}

export default Favorite;
