import { useState } from "react";
import axios from "axios";
import useRequest from "../../hooks/use-request";
import Router from "next/router";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const uri = "/api/users/signup";
  const method = "post";
  const body = {
    email,
    password,
  };
  const onSuccess = () => {
    Router.push("/");
  };
  const { doRequest, errors } = useRequest({ uri, method, body, onSuccess });

  const onSubmit = async (event) => {
    event.preventDefault();

    await doRequest();
  };
  return (
    <form onSubmit={onSubmit}>
      <h1>Sign Up</h1>
      <div className="form-group">
        <label>Email Address</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
        />
      </div>
      {errors}
      <button className="btn btn-primary">Sign Up</button>
    </form>
  );
};

export default SignUp;
