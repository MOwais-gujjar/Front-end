import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Message_options } from "@/constant";
import { EllipsisVertical } from "lucide-react";

export function DropdownMenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className=" cursor-pointer">
        <EllipsisVertical size={17} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" relative left-[70px] top-3 w-40 ">
        <DropdownMenuGroup>
          {Message_options.map((el) => (
            <DropdownMenuItem className=" text-xs">{el.title}</DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
