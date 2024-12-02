import UrlShortenerInput from "../components/UrlShortenerInput";
import useUrlShortener from "../hooks/useUrlShortener";

const CreationPage = () => {
    
  return (
    <div className='flex items-center justify-center w-[50%] h-screen flex-col'>
      <UrlShortenerInput />
    </div>
  );
};

export default CreationPage;
