import { Separator } from "@/components/ui/separator";
import LoginForm from "@/components/login-form";
import { useAuthStore } from "@/stores/auth";
import { useNavigate } from "react-router";
import { useEffect } from "react";

const Login = () => {
  const user = useAuthStore((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/my/recipe/list");
    }
  });

  return (
    <div className="flex flex-1 lg:p-6">
      <div className="flex-1 flex h-full border border-secondary rounded-4xl shadow-lg/5">
        <div className="flex-1 hidden justify-center items-center lg:flex">
          image here
        </div>
        <Separator orientation="vertical" className="bg-secondary" />
        <div className="w-full lg:w-1/3 h-full flex justify-center items-center">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
