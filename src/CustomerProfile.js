import React, { useState, useEffect } from "react";

const CustomerProfile = props => {
  const [customer, setCustomer] = useState(null);

  function fetchData() {
    if (props.id) {
      console.log("fetching customer " + props.id);
      fetch("https://cyf-react.glitch.me/customers/" + props.id)
        .then(res => res.json())
        .then(data => {
          console.log(data);
          setCustomer(data);
        });
    }
  }
  useEffect(fetchData, [props.id]);
  if (customer) {
    let vip;
    if (customer.vip) {
      vip = <li>VIP</li>;
    } else {
      vip = null;
    }
    return (
      <ul>
        <li>{customer.id}</li>
        {vip}
        <li>{customer.email}</li>
        <li>{customer.phoneNumber}</li>
      </ul>
    );
  } else {
    return null;
  }
};

export default CustomerProfile;
