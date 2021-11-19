import { useState } from "react";

const useForm = (items, callback) => {
  const [values, setValues] = useState(items);
  console.log(values);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    callback();
  };

  return {
    values,
    handleChange,
    onSubmit,
  };
};
export default useForm;
