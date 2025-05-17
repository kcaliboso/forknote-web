import { NavLink } from "react-router";

const NavBar = () => {
  return (
    <div className="flex gap-8 items-center justify-around h-full ">
      <NavLink
        to="/about"
        className={({ isActive }) =>
          [isActive ? "active-nav-link" : "inactive-nav-link"].join(" ")
        }
      >
        About
      </NavLink>
      <NavLink
        to="/contact-us"
        className={({ isActive }) =>
          [isActive ? "active-nav-link" : "inactive-nav-link"].join(" ")
        }
      >
        Contact Us
      </NavLink>
    </div>
  );
};

export default NavBar;
