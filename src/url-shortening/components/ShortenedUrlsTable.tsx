import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ShortenedUrl } from "../interfaces/interfaces";
import ActionsTableCell from "./ShortenedUrlActionsTableCell";

interface ShortenedUrlsTableProps {
  shortenedUrls: ShortenedUrl[];
}

const ShortenedUrlsTable = ({ shortenedUrls }: ShortenedUrlsTableProps) => {
  return (
    <Table className='max-w-[100%]'>
      <TableHeader>
        <TableRow>
          <TableHead>Id</TableHead>
          <TableHead>Code</TableHead>
          <TableHead>Original Url</TableHead>
          <TableHead className='text-left'>Actions</TableHead>
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
