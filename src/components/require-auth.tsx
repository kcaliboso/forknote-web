import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthStore } from "../stores/auth.ts";

export const RequireAuth = () => {
  const user = useAuthStore((state) => state.user);
  const redirect = useAuthStore((state) => state.redirect);
  const location = useLocation();

  if (!user) {
    const redirectPath = location.pathname + location.search;
    if (redirect) {
      return <Navigate to={`/auth/login?redirect=${redirectPath}`} replace />;
    }
    return <Navigate to="/auth/login" replace />;
  }

  return <Outlet />;
};
