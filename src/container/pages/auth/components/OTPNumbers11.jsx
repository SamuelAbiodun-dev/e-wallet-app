import "../styles/OTPNumbers.css";
import OTP11 from "../../../../assets/image/svg/OTP11.svg";
import { LoginButton } from "../styles/authentication.styled";
import resetPasswordImage from "../../../../assets/image/svg/resetPasswordImage.svg";
function OTPNumbers11() {
    return (
      <div className="page4_div">
        <div className="left_side">
          <img src={OTP11} alt="login_image" className="page11_image" />
        </div>
        <div className="right_side">
            {/* <img src={resetPasswordImage} alt="enter your otp numbers" /> */}
          {/* <p className="otp_numbers">Enter your OTP number</p> */}
          {/* <div className="otp_box">
            <input type="text" value="-" className="minus_box"/>
            <input type="text" value="-" className="minus_box"/>
            <input type="text" value="-" className="minus_box"/>
            <input type="text" value="-" className="minus_box"/>
          </div> */}
          {/* <LoginButton type="button" value="Continue" /> */}
        </div>
      </div>
    );
  }
  export default OTPNumbers11;