import { Outlet } from "react-router-dom";
import { useAuthStore } from "../stores/auth";
import { clearAuthStore } from "../stores/auth";
import NavBar from "../components/navbar";
import PageSection from "../components/sections/page-section";

const Auth = () => {
  const user = useAuthStore((state) => state.user);

  const handleLogout = () => {
    clearAuthStore();
  };

  return (
    <>
      <NavBar />
      {user && <button onClick={handleLogout}>Logout</button>}
      <Outlet />
    </>
  );
};

export default Auth;
