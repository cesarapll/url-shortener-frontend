import { useState } from "react";

const useOriginalUrlForm = () => {
  const [originalUrl, setOriginalUrl] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleOriginalUrlChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const { value } = event.target;
    setOriginalUrl(value);
  };

  const validate = () => {
    let error = "";
    if (!originalUrl) {
      error = "El URL es requerido";
      setErrorMessage(error);
      return error;
    }

    const regex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;

    if (!regex.test(originalUrl)) {
      error = "Debes ingresar un URL con formato válido";
      setErrorMessage(error);
      return error;
    }

    setErrorMessage(error);
    return error;
  };

  return {
    originalUrl,
    handleOriginalUrlChange,
    validate,
    errorMessage,
    loading,
    setLoading,
  };
};

export default useOriginalUrlForm;
