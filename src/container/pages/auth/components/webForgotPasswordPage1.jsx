import "../styles/webForgotPasswordPage.css";
import webForgotPasswordImage from "../../../../assets/image/svg/webForgotPassword.svg";
import resetPasswordImage from "../../../../assets/image/svg/resetPasswordImage.svg";
import { TextInput, LoginButton } from "../styles/authentication.styled";
function WebForgotPasswordPage1() {
  return (
    <div className="page10-div">
      <div className="left-side">
        <img
          src={webForgotPasswordImage}
          alt="forgot password"
          className="forgot-password"
        />
      </div>
      <div className="right-side">
        <p className="resetPassword">Reset Password</p>
        <img
          src={resetPasswordImage}
          alt="reset password"
          className="reset-password"
        />
        <div className="enter-div">
          <p className="enterEmail">Enter Email Address to reset Password</p>
        </div>
        <TextInput type="text" placeholder="Email Address:" />
        <LoginButton type="button" value="Next" />
        <div className="cancel">
          <a href="/signup">Cancel</a>
        </div>
      </div>
    </div>
  );
}
export default WebForgotPasswordPage1;
