import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton.js";

const Order = props => {
  const [orders, pizza] = useState(0);
  function orderOne() {
    pizza(orders + 1);
  }
  return (
    <li>
      {props.orderType}: {orders}
      <RestaurantButton result={orderOne} />
    </li>
  );
};

export default Order;
