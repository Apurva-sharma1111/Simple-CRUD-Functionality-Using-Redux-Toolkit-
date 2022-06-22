import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserForUp } from "../features/setUserSlice";
import { addUser, editUser } from "../features/userSlice";
import { nanoid } from "@reduxjs/toolkit";

export const Adduser = () => {
  const user = useSelector((state) => state.setuser);

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(setUserForUp({...user, [name] : value}))
  };

  const handleSubmit = () => {
    user.id === 0 ? dispatch(addUser({...user, id: nanoid(8)})) : dispatch(editUser(user))
    dispatch(setUserForUp({
      id: 0,
      name: "",
      email: ""
    }))
  }

  return (
    <div>
      <div className="formDiv">
        <h2>Add New User</h2>
        <input
          type="text"
          placeholder="Name..."
          onChange={handleChange}
          name="name"
          value={user.name}
        />
        <input
          type="email"
          placeholder="Email..."
          onChange={handleChange}
          name="email"
          value={user.email}
        />
        <button onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};
