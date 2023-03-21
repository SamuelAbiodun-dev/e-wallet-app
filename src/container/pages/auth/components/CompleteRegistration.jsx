import CompleteRegistrationImage from "../../../../assets/image/svg/CompleteRegistration.svg"
import "../styles/CompleteRegistration.css"
import { LoginButton2, TextInput } from "../styles/authentication.styled"
function CompeleteRegistration(){
    return(
        <div className="page7_div">
           <div className="left-side">
           <img src={CompleteRegistrationImage} alt="complete-your-registration" className="complete-reg-image"/>
           </div>
           <div className="right-side">
           <div className="right-side-div1">
          <div className="oneofthree">
          <LoginButton2 type="button" value="1 Of 3" className="oneOfthree" />
          </div>
          <div className="complete-reg-div">
            <p className="complete-p">Kindly Complete Your Registration</p><br />
          </div>
        </div>
        <hr />
        <div className="KYC">
            <h1 className="kyc">KYC</h1>
           </div>
           <div className="Identification">
            <p className="identification">Select a Form of Identification</p>
           </div>
           <TextInput type="text" placeholder="NIN:" />
           <TextInput type="text" placeholder="Home Address:"/>
           <hr />
           <div className="KYC">
            <h1 className="kyc">Add Cards</h1>
           </div >
           <div className="merged-div">
           <input type="text" placeholder="Card Name" className="merged-input" />
           <input type="text" placeholder="Card Number" className="merged-input"/>
           <input type="text" placeholder="Exp. Date                                                    mm/yr" className="merged-input"/>
           <input type="text" placeholder="CVV" className="merged-input"/>
           </div>
           <a href="/signup" className="next">
            Next
          </a>
           </div>
        </div>
    )
}
export default CompeleteRegistration
