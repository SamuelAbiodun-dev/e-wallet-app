import LoginImage from "../../../../assets/image/svg/LoginImage.svg";
import "../styles/Login.css";
import Image2 from "../../../../assets/image/svg/forgotPassword.svg";
import { LoginButton, TextInput } from "../styles/authentication.styled";

function Login() {
  return (
    <div className="page1_div">
      <div className="left_side">
        <img src={LoginImage} alt="login_image" className="page1_image" />
      </div>
      <div className="right_side">
        <p className="welcome">Welcome Back!</p>
        <p className="dashboard-desc">Log in to your Dashboard</p>
        <TextInput type="text" placeholder="Email:" />
        <TextInput type="text" placeholder="Password:" />
        <div className="right-side-div2">
          <div className="remember-me-div">
            <input type="checkbox" className="checkbox" />
            <p className="remember-p">Remember me</p>
          </div>
          <div className="forget-password-div">
            <img src={Image2} alt="Forget password" className="forget-img" />
            <p className="forget-p">Forgot Password?</p>
          </div>
        </div>
        <LoginButton type="button" value="Login" />
        <div className="right-side-div3">
          <p className="account-p">Don't have an Account?</p>
          <a href="/webSignupPage" className="sign-up">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
}
export default Login;


