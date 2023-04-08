import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("codeHavenUser", response?.user);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="homepageWrapper">
        <div className="formWrapper">
          <img
            src="/logo_bg_removed.png"
            alt="code-haven-logo"
            className="logoImg"
          />
          <div className="formWrapperText">
            <h2>Welcome Back</h2>
            <p>Enter your credentials to access your account.</p>
          </div>
          <div className="inputGroup">
            <input
              type="text"
              name="email"
              value={email}
              placeholder="Enter Email Id"
              className="inputBox"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Enter Password"
              className="inputBox"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="passwordResetText">
              <p>
                Forgot Password? <a href="/resetpassword">Reset Password</a>
              </p>
            </div>
            <button className="btn join-btn" onClick={loginHandler}>
              Login
            </button>
          </div>
        </div>
        <div className="passwordResetText">
          <p>
            Don't have an account? <a href="/accounts/signup">Sign Up</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
