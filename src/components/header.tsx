import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import MobileNavBar from "./mobile-navbar.tsx";
import NavBar from "./navbar.tsx";
import useIsMobile from "../hooks/isMobile.tsx";
import HamburgerIcon from "./icons/hamburger-icon.tsx";

const Header = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  const goHome = () => {
    navigate("/");
  };

  useEffect(() => {
    if (!isMobile && isOpen) {
      setIsOpen(false);
    }
  }, [isMobile, isOpen]);

  return (
    <div className="flex w-full sticky top-0 py-4 lg:py-6">
      <nav className="flex rounded-xl justify-self-center justify-between items-center w-full bg-matcha-800 text-primary-100  px-2 py-2 lg:py-4 lg:px-5">
        <h1 className="font-extrabold text-3xl cursor-pointer" onClick={goHome}>
          {isMobile ? "RMS" : "Recipe Manager"}
        </h1>

        {!isMobile && <NavBar />}
        {isMobile && (
          <HamburgerIcon
            className="size-8"
            onClick={() => setIsOpen(!isOpen)}
          />
        )}

        <MobileNavBar isOpen={isOpen} closeFn={setIsOpen} />
      </nav>
    </div>
  );
};
export default Header;
