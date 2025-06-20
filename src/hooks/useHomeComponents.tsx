import { useLocation } from "react-router";

export const useHomeComponents = () => {
  const location = useLocation();

  if (location.pathname.includes("my")) {
    return false;
  }

  return true;
};
