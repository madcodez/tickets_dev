import { useState } from "react";
import axios from "axios";

const useRequest = ({ uri, body, method, onSuccess }) => {
  const [errors, setErrors] = useState(null);

  async function doRequest() {
    try {
      setErrors(null);
      const response = await axios[method](uri, body);
      if (onSuccess) {
        onSuccess();
      }

      return response.data;
    } catch (err) {
      setErrors(
        <div className="alert alert-danger">
          <h2>Oops..</h2>
          <ul>
            {err.response.data.errors.map((err) => (
              <li key={err.message}>{err.message}</li>
            ))}
          </ul>
        </div>
      );
    }
  }

  return { doRequest, errors };
};

export default useRequest;
