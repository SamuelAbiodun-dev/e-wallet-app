import SignUpImage from "../../../../assets/image/svg/SignUpImage.svg";
import "../styles/SignUp.css";
// import Image3 from "../../../../assets/image/svg/forgotPassword.svg";
import { SignupButton, TextInput } from "../styles/authentication.styled";
import { useNavigate } from "react-router";

function SignUp() {
  const navigate = useNavigate();
  return (
    <div className="page2_div">
      <div className="left_side">
        <img src={SignUpImage} alt="sign-up" className="page2_image" />
      </div>
      <div className="right_side">
        <p className="welcome">Welcome Back!</p>
        <p className="dashboard-desc">
          Sign up by entering the information below
        </p>
        <TextInput type="text" placeholder="Firstname:" />
        <TextInput type="text" placeholder="Lastname:" />
        <TextInput type="text" placeholder="Email:" />
        <TextInput type="text" placeholder="Password:" />
        <div className="right-side-div3">
          <p className="account2-p">Already have an Account?</p>
          <a href="/webLoginPage" className="login">
            Login
          </a>
        </div>
        <SignupButton
          onClick={() => navigate("/webVerifyAcctPage")}
          type="button"
          value="Sign Up"
        />
      </div>
    </div>
  );
}
export default SignUp;
