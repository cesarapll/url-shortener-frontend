import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useUrlShortener from "../hooks/useUrlShortener";
import { useNavigate } from "react-router-dom";
import useOriginalUrlForm from "../hooks/useOriginalUrlForm";

const UrlShortenerInput = () => {
  const navigate = useNavigate();

  const {
    originalUrl,
    handleOriginalUrlChange,
    validate,
    errorMessage,
    loading,
    setLoading,
  } = useOriginalUrlForm();

  const { createShortenedUrl } = useUrlShortener();

  const handleShortenedUrlCreation = () => {
    const error = validate();
    if (error !== "") {
      return;
    }
    setLoading(true);
    createShortenedUrl(originalUrl).finally(() => {
      setLoading(false);
      navigate("/");
    });
  };

  return (
    <div className='flex w-full flex-col'>
      <div className='flex w-full items-center space-x-2'>
        <Input
          type='url'
          placeholder='Long URL'
          value={originalUrl}
          onChange={handleOriginalUrlChange}
        />
        <Button type='submit' onClick={handleShortenedUrlCreation}>
          Shorten
        </Button>
      </div>
      {errorMessage && <p className='my-2 mx-2'>{errorMessage}</p>}
      {loading && <p className='my-2 mx-2'>Generando nueva URL ...</p>}
    </div>
  );
};

export default UrlShortenerInput;
