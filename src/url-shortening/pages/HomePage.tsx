import useShortenedUrlStore from "@/store/ShortenedUrlsStore";
import ShortenedUrlsTable from "../components/ShortenedUrlsTable";
import UrlShortenerInput from "../components/UrlShortenerInput";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import useUrlShortener from "../hooks/useUrlShortener";
import { useNavigate } from "react-router-dom";

const UrlShortenerMainPage = () => {
  const navigate = useNavigate();

  const { shortenedUrls, getShortenedUrls } = useUrlShortener();

  const goToCreationPage = () => {
    navigate("/create");
  };

  useEffect(() => {
    getShortenedUrls();
  }, []);

  return (
    <div className='flex items-center justify-center gap-8 h-screen flex-col'>
      <div className='flex justify-between flex-row w-[100%]'>
        <p>Shortened Urls</p>
        <Button onClick={goToCreationPage}>Short URL</Button>
      </div>
      <ShortenedUrlsTable shortenedUrls={shortenedUrls} />
    </div>
  );
};

export default UrlShortenerMainPage;
