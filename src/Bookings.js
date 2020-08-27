import React, { useState, useEffect } from "react";
import Form from "./Form.js";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const [bookings, setBookings] = useState(null);
  const [loadingFailure, setLoadingFailure] = useState(false);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me/")
      .then(response => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        } else {
          throw new Error(
            `Encountered something unexpected: ${response.status} ${
              response.statusText
            }`
          );
        }
      })
      .then(data => {
        setBookings(data);
      })
      .catch(error => {
        console.log("failed to load bookings: ", error);
        setLoadingFailure(true);
      });
  }, []);

  const search = searchVal => {
    function isMatch(booking) {
      let fN = booking.firstName.toLowerCase();
      let sN = booking.surname.toLowerCase();
      return fN === searchVal || sN === searchVal;
    }
    let newBookings = bookings.filter(isMatch);
    setBookings(newBookings);
  };
  function addBooking(booking) {
    console.log("add a new booking: ", booking);

    setBookings([...bookings, { ...booking, id: bookings.length + 1 }]);
  }

  if (loadingFailure) {
    return <p>Loading failed!</p>;
  }
  if (bookings) {
    return (
      <div className="App-content">
        <div className="container">
          <Search search={search} />
          <SearchResults results={bookings} />
          <Form addBooking={addBooking} />
        </div>
      </div>
    );
  } else {
    return <p>Loading .....</p>;
  }
};

export default Bookings;
