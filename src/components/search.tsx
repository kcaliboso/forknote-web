import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { SearchIcon } from "lucide-react";
import type { ChangeEvent } from "react";

interface SearchProps {
  show: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function Search({ show, onChange }: SearchProps) {
  return (
    <div className={cn("relative", show ? "visible" : "hidden")}>
      <div className="absolute right-2.5 top-2.5 h-4 w-4 text-muted-foreground">
        <SearchIcon className="h-4 w-4" />
      </div>
      <Input
        type="text"
        placeholder="Search..."
        className="w-full rounded-lg bg-background pr-8"
        onChange={onChange}
      />
    </div>
  );
}
