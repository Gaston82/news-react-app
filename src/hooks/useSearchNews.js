import { useState } from "react";

export const useSearchNews = (initialState = {}) => {
  const [formValues, setFormValues] = useState(initialState);

  const reset = () => {
    setFormValues(initialState);
  };

  const handleInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  return [formValues, handleInputChange, reset];
};
