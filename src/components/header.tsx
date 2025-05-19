import Navbar from "@/components/navbar";
import { Link } from "react-router";
import { Input } from "@/components/ui/input";
import { useAuthStore } from "@/stores/auth";
import { SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

import { motion } from "motion/react";

const Header = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <motion.div
      initial={{ y: -50 }}
      animate={{
        y: 0,
        transition: {
          duration: 0.25,
        },
      }}
    >
      <div className="w-full py-2 flex items-center justify-between px-2">
        <Link to="/" className="font-bold text-4xl">
          Fork<span className="text-primary">Note</span>
        </Link>
        <Navbar />
        <div className="flex gap-4 items-center">
          <div className="relative">
            <div className="absolute right-2.5 top-2.5 h-4 w-4 text-muted-foreground">
              <SearchIcon className="h-4 w-4" />
            </div>
            <Input
              id="search"
              type="search"
              placeholder="Search..."
              className="w-full rounded-lg bg-background pr-8"
            />
          </div>
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
    </motion.div>
  );
};

export default Header;
