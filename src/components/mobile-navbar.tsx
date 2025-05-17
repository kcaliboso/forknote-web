import { NavLink } from "react-router";
import { cn } from "../lib/utils.ts";
import CloseIcon from "./icons/close-icon.tsx";
import type React from "react";

interface MobileNavBarProps {
  isOpen: boolean;
  closeFn: (status: boolean) => void;
}

const MobileNavBar: React.FC<MobileNavBarProps> = ({ isOpen, closeFn }) => {
  return (
    <>
      <div
        onClick={() => closeFn(!isOpen)}
        className={cn(" inset-0 bg-black/40 z-40", isOpen ? "fixed" : "hidden")}
      />
      <div
        className={cn(
          "right-0 top-0 h-full w-[15rem] bg-matcha-800  z-50",
          isOpen ? "fixed" : "hidden"
        )}
      >
        <div className="flex justify-end p-6 w-full">
          <CloseIcon
            onClick={() => closeFn(!isOpen)}
            className="size-7 text-primary-100"
          />
        </div>
        <div className="flex flex-col px-4 py-6 gap-4 text-lg h-full">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              [isActive ? "active-nav-link" : "inactive-nav-link"].join(" ")
            }
            onClick={() => closeFn(!isOpen)}
          >
            About
          </NavLink>
          <NavLink
            to="/contact-us"
            className={({ isActive }) =>
              [isActive ? "active-nav-link" : "inactive-nav-link"].join(" ")
            }
            onClick={() => closeFn(!isOpen)}
          >
            Contact Us
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default MobileNavBar;
