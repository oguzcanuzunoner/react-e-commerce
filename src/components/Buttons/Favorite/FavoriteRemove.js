import React from "react";
import styled from "styled-components";

const FavoriteRemoveStyle = styled.button`
  background-color: #FFFF00;
  border: none;
  color: black;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  width: 75px;
  height: 50px;
  border-radius: 2px;
  cursor:pointer;
`;

function FavoriteRemove({ favoriteRemoveFunc }) {
  return <FavoriteRemoveStyle onClick={favoriteRemoveFunc}>Favoriden Kaldır</FavoriteRemoveStyle>;
}

export default FavoriteRemove;
