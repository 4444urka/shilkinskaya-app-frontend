import React from "react";
import FormInput from "../../components/FormInput/FormInput";
import "./styles.css";
import Button from "../../components/SubmitButton/Button";

const Login = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
     e.preventDefault();
  };

  return (
    <form className="loginForm" onSubmit={handleSubmit}>
      <FormInput
        label="username: "
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <FormInput
        label="password: "
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="submit">Login</Button>
    </form>
  );
};

export default Login;
