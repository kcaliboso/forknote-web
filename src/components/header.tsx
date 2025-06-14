import Navbar from "@/components/navbar";
import { Link } from "react-router";
import { useAuthStore } from "@/stores/auth";
import { Button } from "@/components/ui/button";

import Search from "./search";
import { ModeToggle } from "./mode-toggle";

export default function Header() {
  const user = useAuthStore((state) => state.user);

  return (
    <div
      id="header"
      className="w-full py-2 flex items-center justify-between px-2 h-16"
    >
      <Link to="/" className="font-bold text-4xl">
        Fork<span className="text-primary">Note</span>
      </Link>
      <div className="hidden xl:flex w-full justify-end gap-12">
        <Navbar />
        <div className="flex gap-4 items-center">
          <Search />
          <ModeToggle />
          {/* TODO: User avatar here */}
          {user ? (
            "User Avatar"
          ) : (
            <>
              <Link to="/auth">
                <Button className="cursor-pointer">Login</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
