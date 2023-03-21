import "../styles/OTPNumbers2.css";
import SignUpImage from "../../../../assets/image/svg/SignUpImage.svg";
import { LoginButton } from "../styles/authentication.styled";
function OTPNumbers2() {
  return (
    <div className="page5_div">
      <div className="left_side">
        <img src={SignUpImage} alt="login_image" className="page5_image" />
      </div>
      <div className="right_side">
        <p className="otp_numbers">Enter your OTP number</p>
        <div className="otp_box">
          <input type="text" placeholder="*" className="dot_box" />
          <input type="text" placeholder="*" className="dot_box" />
          <input type="text" placeholder="*" className="dot_box" />
          <input type="text" placeholder="*" className="dot_box" />
        </div>
        <LoginButton type="button" value="Continue" />
      </div>
    </div>
  );
}
export default OTPNumbers2;
