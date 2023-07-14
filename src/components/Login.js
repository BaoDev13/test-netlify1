import { useState } from "react";
import { loginApi } from "../services/UserServices";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Login = () => {
  const { loginContext } = useContext(UserContext);

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);

  const [loadingAPI, setLoadingAPI] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      toast.error("Email/Password is required!");
      return;
    }
    setLoadingAPI(true);
    let res = await loginApi(email, password);
    if (res && res.token) {
      loginContext(email, res.token);
      navigate("/");
    } else {
      //error
      if (res && res.status === 400) {
        toast.error(res.data.error);
      }
    }
    setLoadingAPI(false);
  };

  const handleGoback = () => {
    navigate("/");
  };
  return (
    <>
      <div className="login-container col-12 col-sm-4">
        <div className="title">Login</div>
        <div className="text">Email or Username ( eve.holt@reqres.in )</div>
        <input
          type="text"
          placeholder="Email or Username..."
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <div className="input-2">
          <input
            type={isShowPassword === true ? "text" : "password"}
            placeholder="Enter your password..."
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <i
            class={
              isShowPassword === true
                ? "fa-solid fa-eye"
                : "fa-solid fa-eye-slash"
            }
            onClick={() => setIsShowPassword(!isShowPassword)}
          ></i>
        </div>

        <button
          className={email && password ? "active" : ""}
          disabled={email && password ? false : true}
          onClick={() => handleLogin()}
        >
          {loadingAPI && <i class="fas fa-sync fa-spin"></i>}
          &nbsp;Log in
        </button>

        <div className="back">
          <i class="fa-solid fa-chevron-left"></i>
          <span onClick={() => handleGoback()}>Go back</span>
        </div>
      </div>
    </>
  );
};

export default Login;
