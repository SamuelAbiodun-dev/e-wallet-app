import SuccessfulAccountImage from "../../../../assets/image/svg/SuccessfulAccount.svg";
import "../styles/SuccessPage.css";
function SuccessPage() {
  return (
    <div className="continue-div">
      <img
        src={SuccessfulAccountImage}
        alt="account-successfully-created"
        className="page6-image"
      />
       <input type="checkbox" className="checkbox"/>
      <p className="continue-anchor">Success</p>
    </div>
  );
}
export default SuccessPage;
