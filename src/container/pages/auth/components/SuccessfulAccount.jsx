import SuccessfulAccountImage from "../../../../assets/image/svg/SuccessfulAccount.svg";
import "../styles/SuccessfulAccount.css";
function SuccessfulAccount() {
  return (
    <div className="continue-div">
      <img
        src={SuccessfulAccountImage}
        alt="account-successfully-created"
        className="page6-image"
      />
      <a href="" className="continue-anchor">Continue</a>
    </div>
  );
}
export default SuccessfulAccount;
