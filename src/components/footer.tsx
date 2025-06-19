import { cn } from "@/lib/utils";
import HeartIcon from "./icons/heart-icon";
import { useLocation } from "react-router";

export default function Footer() {
  const currentYear = new Date().getFullYear().toString();
  const location = useLocation();

  return (
    <div
      className={cn(
        "flex gap-2 items-center w-full justify-center text-sm tracking-wide",
        location.pathname.includes("my") ? "hidden" : "visible"
      )}
    >
      Developed with
      <HeartIcon className="size-8 fill-primary" />|{" "}
      <p>Copyright &copy; {currentYear}</p>
    </div>
  );
}
