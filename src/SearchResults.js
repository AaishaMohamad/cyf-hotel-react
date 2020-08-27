import React, { useState } from "react";

import moment from "moment";
import CustomerProfile from "./CustomerProfile";

const SearchResults = props => {
  console.log(props.results);
  const [customerProfileId, setCustomerProfileId] = useState(null);
  function showProfile(id) {
    console.log("show profile " + id);
    setCustomerProfileId(id);
  }
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">title</th>
            <th scope="col">First name</th>
            <th scope="col">Surname</th>
            <th scope="col">email</th>
            <th scope="col">room</th>
            <th scope="col">check in date</th>
            <th scope="col">check out date</th>
            <th scope="col">nights</th>
            <th scope="col"> </th>
          </tr>
        </thead>
        <tbody>
          {props.results.map((result, index) => {
            return (
              <SearchResultsRow
                result={result}
                key={index}
                showProfile={showProfile}
              />
            );
          })}
        </tbody>
      </table>
      <div>
        <CustomerProfile id={customerProfileId} />
      </div>
    </div>
  );
};

const SearchResultsRow = props => {
  const result = props.result;
  const [selected, setSelected] = useState(false);
  function toggleSelection() {
    setSelected(!selected);
  }
  function handleShowProfile() {
    props.showProfile(result.id);
  }
  let selectedClassName;
  if (selected) {
    selectedClassName = "highlighted";
  } else {
    selectedClassName = "";
  }

  return (
    <tr className={selectedClassName} onClick={toggleSelection}>
      <th scope="row"> {result.id}</th>
      <td> {result.title} </td>
      <td> {result.firstName} </td>
      <td> {result.surname} </td>
      <td> {result.email} </td>
      <td> {result.roomId} </td>
      <td> {result.checkInDate} </td>
      <td> {result.checkOutDate} </td>
      <td>
        {moment(result.checkOutDate).diff(moment(result.checkInDate), "days")}
      </td>
      <td>
        <button onClick={handleShowProfile}>Show profile</button>
      </td>
    </tr>
  );
};

export default SearchResults;
