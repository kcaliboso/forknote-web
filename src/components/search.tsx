import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

export default function Search() {
  return (
    <div className="relative">
      <div className="absolute right-2.5 top-2.5 h-4 w-4 text-muted-foreground">
        <SearchIcon className="h-4 w-4" />
      </div>
      <Input
        type="text"
        placeholder="Search..."
        className="w-full rounded-lg bg-background pr-8"
      />
    </div>
  );
}
