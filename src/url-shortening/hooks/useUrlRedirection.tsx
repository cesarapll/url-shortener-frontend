import UrlShortenerService from "@/lib/services/UrlShortenerService";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useUrlRedirection = () => {
  const { code } = useParams<{ code: string }>();

  const [errorMessage, setErrorMessage] = useState<string>("");

  const redirectToOriginalUrl = async () => {
    if (!code) {
      setErrorMessage("No se ha colocado un código en el URL");
      return;
    }
    UrlShortenerService.getOriginalUrlByCode(code)
      .then((url) => {
        if (!url) {
          setErrorMessage("No se ha encontrado el URL");
          return;
        }
        window.location.href = url;
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage("No se ha encontrado el URL");
      });
  };

  useEffect(() => {
    redirectToOriginalUrl();
  }, []);

  return {
    errorMessage,
  };
};

export default useUrlRedirection;
