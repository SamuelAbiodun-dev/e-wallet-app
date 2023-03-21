import "../styles/webForgotPasswordPage.css";
import webForgotPasswordImage from "../../../../assets/image/svg/webForgotPassword.svg";
import resetPasswordImage from "../../../../assets/image/svg/resetPasswordImage.svg";
import { TextInput, LoginButton } from "../styles/authentication.styled";
import "../styles/OTPNumbers.css";
function WebForgotPasswordPage4() {
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
        <img
          src={resetPasswordImage}
          alt="reset password"
          className="reset-password"
        />
        <div className="enter-div">
          <p className="resetPassword">Enter your OTP number</p>
        </div>
        <div className="otp_box">
          <input type="text" placeholder="*" className="minus_box" />
          <input type="text" placeholder="*" className="minus_box" />
          <input type="text" placeholder="*" className="minus_box" />
          <input type="text" placeholder="*" className="minus_box" />
        </div>
        <LoginButton type="button" value="Continue" />
        <div className="cancel">
          <a href="/signup">Cancel</a>
        </div>
      </div>
    </div>
  );
}
export default WebForgotPasswordPage4;
