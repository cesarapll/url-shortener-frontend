import { Button } from "@/components/ui/button";
import { TableCell } from "@/components/ui/table";
import useUrlShortener from "../hooks/useUrlShortener";

interface ShortenedUrlActionsProps {
  id: number;
  code: string;
}

const ActionsTableCell = ({ id, code }: ShortenedUrlActionsProps) => {
  const { deleteShortenedUrl, goToRedirectionPage } = useUrlShortener();

  const handleDeleteUrl = async () => {
    await deleteShortenedUrl(id);
  };

  const handleRedirection = () => {
    goToRedirectionPage(code);
  };

  return (
    <TableCell className='flex flex-row space-x-2 justify-end'>
      <Button className='w-20' onClick={handleRedirection}>
        Redirect
      </Button>
      <Button
        className='bg-secondary w-20 hover:bg-secondary'
        onClick={handleDeleteUrl}
      >
        Delete
      </Button>
    </TableCell>
  );
};

export default ActionsTableCell;
