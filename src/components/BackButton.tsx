import { ChevronLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

interface BackButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const BackButton = ({ text, className, ...props }: BackButtonProps) => {
  return (
    <Button variant='outline' className={className} {...props}>
      <ChevronLeft /> {text}
    </Button>
  );
};

export default BackButton;
