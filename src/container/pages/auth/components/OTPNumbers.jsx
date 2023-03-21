import "../styles/OTPNumbers.css";
import SignUpImage from "../../../../assets/image/svg/SignUpImage.svg";
import { LoginButton } from "../styles/authentication.styled";
function OTPNumbers() {
    return (
      <div className="page4_div">
        <div className="left_side">
          <img src={SignUpImage} alt="login_image" className="page4_image" />
        </div>
        <div className="right_side">
          <p className="otp_numbers">Enter your OTP number</p>
          <div className="otp_box">
            <input type="text" placeholder="-" className="minus_box"/>
            <input type="text" placeholder="-" className="minus_box"/>
            <input type="text" placeholder="-" className="minus_box"/>
            <input type="text" placeholder="-" className="minus_box"/>
          </div>
          <LoginButton type="button" value="Continue" />
        </div>
      </div>
    );
  }
  export default OTPNumbers;