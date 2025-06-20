import Navbar from "@/components/navbar";
import { Link } from "react-router";
import { useAuthStore } from "@/stores/auth";
import { Button } from "@/components/ui/button";
import { useHomeComponents } from "@/hooks/useHomeComponents";

import Search from "./search";
import { ModeToggle } from "./mode-toggle";
import UserAvatar from "./user-avatar";

export default function Header() {
  const user = useAuthStore((state) => state.user);

  return (
    <div
      id="header"
      className=" w-full h-12 py-8 flex items-center justify-between"
    >
      <Link to="/" className="font-bold text-4xl">
        Fork<span className="text-primary">Note</span>
      </Link>
      <div className="hidden xl:flex w-full justify-end gap-12">
        <Navbar className={useHomeComponents() ? "visible" : "hidden"} />
        <div className="flex gap-4 items-center">
          <Search show={useHomeComponents() ? true : false} />
          <ModeToggle />
          {/* TODO: User avatar here */}
          {user ? (
            <UserAvatar />
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
