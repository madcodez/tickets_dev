import React, { useState, useRef, useEffect } from "react";
import Router from "next/router";
import useRequest from "../../hooks/use-request";

const NewTicket = ({ client }) => {
  const [title, setTitle] = useState();
  const [price, setPrice] = useState();

  const inputRef = useRef(null);

  const onBlur = () => {
    const value = parseFloat(price);
    if (isNaN(value)) {
      return;
    }
    setPrice(value.toFixed(2));
  };
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const uri = "/api/tickets/new";
  const method = "post";
  const body = {
    title,
    price,
  };
  const onSuccess = (ticket) => {
    Router.push("/");
  };
  const { doRequest, errors } = useRequest({ uri, method, body, onSuccess });

  const onSubmit = (event) => {
    event.preventDefault();

    doRequest();
  };
  return (
    <div>
      <h1>Create a Ticket</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            value={title}
            className="form-control"
            ref={inputRef}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Price</label>
          <input
            value={price}
            className="form-control"
            onBlur={onBlur}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};
NewTicket.getInitialProps = async (context, client, currentUser) => {
  return { client };
};
export default NewTicket;
