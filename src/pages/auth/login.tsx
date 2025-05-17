import { useState } from "react";
import { useAuthStore } from "../../stores/auth";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const login = useAuthStore((state) => state.saveAuth);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const fakeUser = {
      name: "Kevin Caliboso",
      email: "calibosokevin@gmail.com",
      jwt: "1",
    };
    login(fakeUser);
  };

  return (
    <>
      <div>Login form</div>
      <h1>hey there</h1>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={credentials.email}
          onChange={handleChange}
          className="border"
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={credentials.password}
          onChange={handleChange}
          className="border"
        />

        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
