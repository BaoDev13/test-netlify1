import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="login-container col-12 col-sm-4">
        <div className="title">Login</div>
        <div className="text">Email or Username</div>
        <input
          type="text"
          placeholder="Email or Username..."
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your password..."
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button>Log in</button>
        <div className="back">
          <i class="fa-solid fa-chevron-left"></i>
          Go back
        </div>
      </div>
    </>
  );
};

export default Login;
