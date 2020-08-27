import React, { useState } from "react";

const Form = props => {
  const emptyUser = {
    title: "",
    firstName: "",
    surname: "",
    email: "",
    roomId: "",
    checkInDate: "",
    checkOutDate: ""
  };
  const [userData, setUserData] = useState({
    ...emptyUser
  });

  function inputChangeHandler(event) {
    const updateUserData = {
      ...userData,
      [event.target.name]: event.target.value
    };
    // console.log(updateUserData);
    setUserData(updateUserData);
  }

  function submitForm(event) {
    event.preventDefault();
    setUserData({ ...emptyUser });
    props.addBooking(userData);
  }

  return (
    <form onSubmit={submitForm}>
      <div>
        <input
          type="text"
          name="title"
          value={userData.title}
          placeholder="Title"
          onChange={inputChangeHandler}
        />
      </div>
      <div>
        <input
          type="text"
          name="firstName"
          value={userData.firstName}
          placeholder="Firstname"
          onChange={inputChangeHandler}
        />
      </div>
      <div>
        <input
          type="text"
          name="surname"
          value={userData.surname}
          placeholder="Surname"
          onChange={inputChangeHandler}
        />
      </div>
      <div>
        <input
          type="text"
          name="email"
          value={userData.email}
          placeholder="Email"
          onChange={inputChangeHandler}
        />
      </div>
      <div>
        <input
          type="number"
          name="roomId"
          value={userData.roomId}
          placeholder="Room"
          onChange={inputChangeHandler}
        />
      </div>
      <div>
        <input
          type="text"
          name="checkInDate"
          value={userData.checkInDate}
          placeholder="check-in date"
          onChange={inputChangeHandler}
        />
      </div>
      <div>
        <input
          type="text"
          name="checkOutDate"
          value={userData.checkOutDate}
          placeholder="check-out date"
          onChange={inputChangeHandler}
        />
      </div>
      <button>Add</button>
    </form>
  );
};
export default Form;
