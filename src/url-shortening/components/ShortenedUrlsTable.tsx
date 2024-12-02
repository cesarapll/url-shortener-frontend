import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useShortenedUrlStore from "@/store/ShortenedUrlsStore";
import { ShortenedUrl } from "../interfaces/interfaces";
import { Button } from "@/components/ui/button";
import ActionsTableCell from "./ShortenedUrlActionsTableCell";

interface ShortenedUrlsTableProps {
  shortenedUrls: ShortenedUrl[];
}

const ShortenedUrlsTable = ({ shortenedUrls }: ShortenedUrlsTableProps) => {
  return (
    <Table className='max-w-md'>
      <TableCaption>A list of your shortened URL's.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Id</TableHead>
          <TableHead>Code</TableHead>
          <TableHead>Original Url</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {shortenedUrls.map((shortenedUrlObject) => (
          <TableRow key={shortenedUrlObject.id}>
            <TableCell className='font-medium'>
              {shortenedUrlObject.id}
            </TableCell>
            <TableCell>{shortenedUrlObject.code}</TableCell>
            <TableCell>{shortenedUrlObject.original_url}</TableCell>
            {
              <ActionsTableCell
                id={shortenedUrlObject.id}
                code={shortenedUrlObject.code}
              />
            }
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ShortenedUrlsTable;
