import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useUrlShortener from "../hooks/useUrlShortener";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const UrlShortenerInput = () => {
  const navigate = useNavigate();

  const [originalUrl, setOriginalUrl] = useState<string>("");

  const { createShortenedUrl } = useUrlShortener();

  const handleOriginalUrlChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const { value } = event.target;
    setOriginalUrl(value);
  };

  const handleShortenedUrlCreation = () => {
    if (!originalUrl) {
      // validation
      return;
    }
    createShortenedUrl(originalUrl).finally(() => navigate("/"));
  };

  return (
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
  );
};

export default UrlShortenerInput;
