import CompeleteRegistration2Image from "../../../../assets/image/svg/CompleteRegistration2.svg";
import { TextInput } from "../styles/authentication.styled";
import "../styles/CompleteRegistration2.css";

function CompleteRegistration2() {
  return (
    <div className="page8-div">
      <img
        src={CompeleteRegistration2Image}
        alt="driver's license and voters card"
        className="page8-image"
      />
      <div className="input-div">
      <input type="text" placeholder="Drivers License" className="inputs1" />
      <input type="text" placeholder="Voters Card" className="inputs2" />
      </div>
    </div>
  );
}
export default CompleteRegistration2;
