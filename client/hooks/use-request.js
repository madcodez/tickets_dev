import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const useRequest = ({ uri, body, method, onSuccess }) => {
  const [errors, setErrors] = useState([]);

  async function doRequest(props = {}) {
    try {
      setErrors([]);
      const response = await axios[method](uri, { ...body, ...props });
      if (onSuccess) {
        toast.success("Success !");
        onSuccess(response.data);
      }

      return response.data;
    } catch (err) {
      console.log(err);
      setErrors(err.response.data.errors);

      err.response.data.errors.map((m) => toast.error(m.message));

      // Object.entries(errors).map(([key, value]) => {
      //   console.log(`${key}: ${value}`);
      // });
    }
  }

  return { doRequest, errors };
};

export default useRequest;
