import { useState } from "react";
import Router from "next/router";
import { toast } from "react-toastify";
import useRequest from "../../hooks/use-request";
import useForm from "../../hooks/use-form";

const SignIn = () => {
  const item = { email: "", password: "" };
  const { handleChange, values, onSubmit } = useForm(item, submit);
  const uri = "/api/users/signin";
  const method = "post";
  const body = {
    email: values.email,
    password: values.password,
  };
  const onSuccess = () => {
    Router.push("/");
  };

  const { doRequest, errors } = useRequest({ uri, method, body, onSuccess });

  async function submit() {
    await doRequest();
  }
  return (
    <form onSubmit={onSubmit}>
      <h1>Sign In</h1>
      <div className="form-group">
        <label>Email Address</label>
        <input
          name="email"
          value={values.email}
          onChange={handleChange}
          className="form-control"
        />
        {errors &&
          errors.map((m, i) =>
            m.field == "email" ? (
              <p key={i} style={{ color: "red" }}>
                {m.message}
              </p>
            ) : (
              ""
            )
          )}
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          name="password"
          value={values.password}
          onChange={handleChange}
          className="form-control"
        />
        {errors &&
          errors.map((m, i) =>
            m.field == "password" ? (
              <p key={i} style={{ color: "red" }}>
                {m.message}
              </p>
            ) : (
              ""
            )
          )}
      </div>

      <button className="btn btn-primary">Sign In</button>
    </form>
  );
};

export default SignIn;
