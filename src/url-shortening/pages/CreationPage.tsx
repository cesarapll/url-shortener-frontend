import BackButton from "@/components/BackButton";
import UrlShortenerInput from "../components/UrlShortenerInput";
import { useNavigate } from "react-router-dom";

const CreationPage = () => {
  const navigate = useNavigate();

  const handleBackButton = () => {
    navigate("/");
  };

  return (
    <div className='flex flex-col w-[50%] space-y-12 justify-center h-screen mt-[-5%]'>
      <BackButton
        text='Back'
        className='bg-secondary pl-2 pr-4 max-w-[15%] min-w-24'
        onClick={handleBackButton}
      />
      <div className='flex items-start justify-center w-[100%] flex-col'>
        <UrlShortenerInput />
      </div>
    </div>
  );
};

export default CreationPage;
