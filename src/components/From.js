import { useState, useContext } from "react";
import React from 'react';
import { AppContext } from "../Context";
const Form = () => {
    const { insertUser } = useContext(AppContext);
    const [newUser, setNewUser] = useState({});

    // Storing the Insert User Form Data.
    const addNewUser = (e, field) => {
        setNewUser({
            ...newUser,
            [field]: e.target.value,
        });
    };

    // Inserting a new user into the Database.
    const submitUser = (e) => {
        e.preventDefault();
        insertUser(newUser);
        e.target.reset();
    };

    return (
        <form className="insertForm" onSubmit={submitUser}>
            <h2>Insert User</h2>
            <label htmlFor="_name">Name</label>
            <input
                type="text"
                id="_name"
                onChange={(e) => addNewUser(e, "user_name")}
                placeholder="Enter name"
                autoComplete="off"
                required
            />
            <label htmlFor="_email">Email</label>
            <input
                type="email"
                id="_email"
                onChange={(e) => addNewUser(e, "user_email")}
                placeholder="Enter email"
                autoComplete="off"
                required
            />
            <label htmlFor="_phone">Phone</label>
            <input
                type="phone"
                id="_phone"
                onChange={(e) => addNewUser(e, "user_phone")}
                placeholder="Enter phone"
                autoComplete="off"
                required
            />
            <label htmlFor="_message">Message</label>
            <input
                type="text"
                id="_message"
                onChange={(e) => addNewUser(e, "user_message")}
                placeholder="Enter message"
                autoComplete="off"
                required
            />
            <input type="submit" value="Insert" />
        </form>
    );
};

export default Form;
