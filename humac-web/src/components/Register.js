import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/userActions";

function Register() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();
  const [name, setName] = useState();

  //const [error, setError] = useState();
  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  //const { loading, userInfo } = userRegister;

  //const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== passwordCheck) {
      console.log("Passwords do not match");
    } else {
      dispatch(register(name, email, password));
    }
  };

  return (
    <div className="page">
      <h2>Register</h2>

      <form className="form" onSubmit={submitHandler}>
        <label htmlFor="register-email">Email</label>
        <input
          id="register-email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="register-password">Password</label>
        <input
          id="register-password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Verify password"
          onChange={(e) => setPasswordCheck(e.target.value)}
        />

        <label htmlFor="register-display-name">Name</label>
        <input
          id="register-display-name"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />

        <input type="submit" value="Register" />
      </form>
    </div>
  );
}

export default Register;
