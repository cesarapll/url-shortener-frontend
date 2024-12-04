import useShortenedUrlStore from "@/url-shortening/store/ShortenedUrlsStore";
import { ShortenedUrlCreationRequest } from "../interfaces/interfaces";

const useUrlShortener = () => {
  const {
    shortenedUrls,
    getShortenedUrls,
    addShortenedUrl,
    deleteShortenedUrl,
  } = useShortenedUrlStore();

  const createShortenedUrl = async (originalUrl: string) => {
    const payload: ShortenedUrlCreationRequest = { original_url: originalUrl };
    return addShortenedUrl(payload);
  };

  const goToRedirectionPage = (code: string) => {
    window.open(`${import.meta.env.VITE_BASE_DOMAIN_URL}/${code}`, "_blank");
  };

  return {
    shortenedUrls,
    getShortenedUrls,
    createShortenedUrl,
    deleteShortenedUrl,
    goToRedirectionPage,
  };
};

export default useUrlShortener;
