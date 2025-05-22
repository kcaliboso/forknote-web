import { Outlet } from "react-router-dom";
import { useAuthStore } from "../stores/auth";
import { clearAuthStore } from "../stores/auth";

export default function Auth() {
  const user = useAuthStore((state) => state.user);

  const handleLogout = () => {
    clearAuthStore();
  };

  return (
    <>
      {user && <button onClick={handleLogout}>Logout</button>}
      <Outlet />
    </>
  );
}
