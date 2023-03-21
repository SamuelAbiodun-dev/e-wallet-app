import CompleteRegistrationImage from "../../../../assets/image/svg/CompleteRegistration.svg";
import "../styles/details.css";
import {
  LoginButton2,
  TextInput,
  LoginButton,
} from "../styles/authentication.styled";
function Details() {
  return (
    <div className="page9_div">
      <div className="left-side">
        <img
          src={CompleteRegistrationImage}
          alt="complete-your-registration"
          className="complete-reg-image"
        />
      </div>
      <div className="right-side">
        <div className="right-side-div1">
          <div className="oneofthree">
            <LoginButton2 type="button" value="2 Of 3" className="oneOfthree" />
          </div>
          <div className="complete-reg-div">
            <p className="complete-p">More Details about You!</p>
            <br />
          </div>
        </div>
        <hr />
        <div className="KYC">
          <h1 className="kyc">Next of kin</h1>
        </div>
        <TextInput type="text" placeholder="Fullname:" />
        <TextInput type="text" placeholder="Email Address:" />
        <TextInput type="text" placeholder="Phone Number:" />
        <TextInput type="text" placeholder="Relationship:" />
        <hr />
        <div className="KYC">
          <h1 className="kyc">BVN</h1>
        </div>
        <TextInput type="text" placeholder="BVN:" />
        <LoginButton type="button" value="Continue" />
        <div className="prev-div">
          <a href="/signup"  className="prev">
            prev
          </a>
        </div>
      </div>
    </div>
  );
}
export default Details;
