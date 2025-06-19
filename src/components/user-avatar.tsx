import { useAuthStore } from "@/stores/auth";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router";
import axios from "../lib/axios";
import { toast } from "sonner";
import { createImageUrl } from "@/lib/utils";

export default function UserAvatar() {
  const user = useAuthStore((state) => state.user);
  const accountLogout = useAuthStore((state) => state.clear);
  const navigate = useNavigate();

  async function logout() {
    await axios
      .post("/v1/auth/logout")
      .then(() => {
        accountLogout();
        navigate("/");
      })
      .catch(() => {
        toast("Something went wrong. Please try again.");
      });
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar>
          <AvatarImage
            className="cursor-pointer"
            sizes="lg"
            src={createImageUrl(user?.avatar ?? "user-image", "user")}
            alt="user-avatar-image"
          />
          <AvatarFallback>
            {user?.firstName[0]}
            {user?.lastName[0]}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => console.log("TODO PROFILE")}>
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => navigate("/my/recipe/list")}>
          My Recipes
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
