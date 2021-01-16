import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userActions";

const Login = ({ location }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  //const redirect = location.search ? location.search.split("=")[0] : "/";

  useEffect(() => {
    if (userInfo) {
      history.push("/");
    }
  }, [history, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div className="login">
      <div className="login__container">
        <h1>Sign in</h1>
        <form onSubmit={submitHandler}>
          <h5>E-mail</h5>
          <input
            onChange={(event) => setEmail(event.target.value)}
            type="email"
          />
          <h5>Password</h5>
          <input
            onChange={(event) => setPassword(event.target.value)}
            type="password"
          />
          <button type="submit" className="login__signInButton">
            Sign In
          </button>
        </form>

        <p>TISKARA HUMAC</p>
      </div>
    </div>
  );
};

export default Login;
