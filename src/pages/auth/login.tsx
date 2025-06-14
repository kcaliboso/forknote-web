import { useState, type ChangeEvent, type FormEvent } from "react";
import { useAuthStore } from "../../stores/auth";
import { Separator } from "@/components/ui/separator";
import LoginForm from "@/components/login-form";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const login = useAuthStore((state) => state.saveAuth);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCredentials((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const fakeUser = {
      name: "Kevin Caliboso",
      email: "calibosokevin@gmail.com",
      jwt: "1",
    };
    login(fakeUser);
  };

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
