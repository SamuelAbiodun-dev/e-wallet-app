import OTPNotificationImage from "../../../../assets/image/svg/webForgotPassword2.svg";
import "../styles/OTPNotification.css";
function WebForgotPasswordPage2() {
  return (
    <div className="page3_div">
      <img
        src={OTPNotificationImage}
        alt="OTPnotification"
        className="page3_image"
      />
    </div>
  );
}
export default WebForgotPasswordPage2;
