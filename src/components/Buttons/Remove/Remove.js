import React from "react";
import styled from "styled-components";

const RemoveStyle = styled.button`
  background-color: #f44336;
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

function Remove({ removeFunc }) {
  return <RemoveStyle onClick={removeFunc}>-</RemoveStyle>;
}

export default Remove;
