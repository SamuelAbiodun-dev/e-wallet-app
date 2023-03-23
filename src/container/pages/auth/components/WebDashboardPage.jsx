import moneyImage from "../../../../assets/image/svg/money.svg"
import "../styles/WebDashboardPage.css"
import Ellipse from "../../../../assets/image/svg/Ellipse.svg"
import User from "../../../../assets/image/svg/User.svg"
function WebDashboardPage(){
    return(
        <div className="container">
            <div>
                <img src={Ellipse} className="ellipse"/>
            </div>
        <div className="inner-container">
        <p className="text">Hi Chibuzor,</p>
        <img src={User} className="user" />
        <div className="total-balance"></div>
        </div>
        </div>
    )
}
export default WebDashboardPage;