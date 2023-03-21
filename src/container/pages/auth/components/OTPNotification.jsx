import OTPNotificationImage from "../../../../assets/image/svg/OTPNotificationImage.svg";
import "../styles/OTPNotification.css";
function OTPNotification() {
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
export default OTPNotification;
