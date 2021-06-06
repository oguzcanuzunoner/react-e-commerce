import React from "react";
import styled from "styled-components";

const AddStyle = styled.button`
  background-color: #008cba;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor:pointer;
`;

function Add({ addFunc }) {
  return <AddStyle onClick={addFunc}>+</AddStyle>;
}

export default Add;
