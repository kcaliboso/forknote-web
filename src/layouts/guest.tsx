import { Outlet } from "react-router-dom";

import { Navigate, useSearchParams } from "react-router";
import { useAuthStore } from "../stores/auth";

import PageSection from "../components/sections/page-section";
import NavBar from "../components/navbar";

const Guest = () => {
  const [searchParams] = useSearchParams();
  const user = useAuthStore((state) => state.user);
  const redirect = searchParams.get("redirect") || "/my/recipe/list";

  if (user) {
    return <Navigate to={redirect} replace />;
  }
  return (
    <>
      <Outlet />
    </>
  );
};

export default Guest;
