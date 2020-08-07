import React from "react";
import Heading from "./Heading";
import Bookings from "./Bookings";
import TouristInfoCards from "./TouristInfoCards";
import "./App.css";
import Footer from "./Footer";
import Restaurant from "./Restaurant.js";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <div className="table">
        <Bookings />
        <Restaurant />
      </div>
      <Footer
        data={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789"
        ]}
      />
    </div>
  );
};

export default App;
