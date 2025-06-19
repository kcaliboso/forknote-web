import { useLocation } from "react-router";

export const useIndexCheck = () => {
  const location = useLocation();

  if (location.pathname === "/") {
    return true;
  }

  return false;
};
