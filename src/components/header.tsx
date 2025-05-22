import Navbar from "@/components/navbar";
import { Link } from "react-router";
import { useAuthStore } from "@/stores/auth";
import { Button } from "@/components/ui/button";

import Search from "./search";

export default function Header() {
  const user = useAuthStore((state) => state.user);

  return (
    <div
      id="header"
      className="w-full py-2 flex items-center justify-between px-2"
    >
      <Link to="/" className="font-bold text-4xl">
        Fork<span className="text-primary">Note</span>
      </Link>
      <Navbar />
      <div className="flex gap-4 items-center">
        <Search />
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
  );
}
