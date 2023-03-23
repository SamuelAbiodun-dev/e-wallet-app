import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./container/pages/auth/components/Login";
import SignUp from "./container/pages/auth/components/SignUp";
import OTPNotification from "./container/pages/auth/components/OTPNotification";
import OTPNumbers from "./container/pages/auth/components/OTPNumbers";
import OTPNumbers2 from "./container/pages/auth/components/OTPNumbers2";
import SuccessfulAccount from "./container/pages/auth/components/SuccessfulAccount";
import CompeleteRegistration from "./container/pages/auth/components/CompleteRegistration";
import Page from "./container/pages/auth/components/page";
import CompleteRegistration2 from "./container/pages/auth/components/CompleteRegistration2";
import Details from "./container/pages/auth/components/details";
import WebForgotPasswordPage1 from "./container/pages/auth/components/webForgotPasswordPage1";
import WebForgotPasswordPage2 from "./container/pages/auth/components/webForgotPasswordPage2";
import OTPNumbers11 from "./container/pages/auth/components/OTPNumbers11";
import WebForgotPasswordPage3 from "./container/pages/auth/components/webForgotPasswordPage3";
import WebForgotPasswordPage4 from "./container/pages/auth/components/webForgotPasswordPage4";
import WebForgotPasswordPage5 from "./container/pages/auth/components/webForgotPasswordPage5";
import SplashScreen from "./container/pages/auth/components/SplashScreen";
import Onboarding1 from "./container/pages/auth/components/Onboarding-1";
import Register from "./container/pages/auth/components/Register";
import { Divider } from "@chakra-ui/react";
import SuccessPage from "./container/pages/auth/components/SuccessPage";
import WebDashboardPage from "./container/pages/auth/components/WebDashboardPage";
function App() {
  let word = [
    "Welcome to chatboat, a great friend to chat with you",
    "If you are confused about what to do just open Chatboat app",
    "Chatboat will be ready to chat & make you happy",
  ];
  let text = ["Next", "Next", "Get Started"];
  return (
    <div className="app-div">
      <Router>
        <Routes>
          <Route path="/react" element={<Page />} />
          <Route path="/webLoginPage" element={<Login />} />
          <Route path="/webSignupPage" element={<SignUp />} />
          <Route path="/webVerifyAcctPage" element={<OTPNotification />} />
          <Route path="/webOTPInputPage" element={<OTPNumbers />} />
          <Route path="webOTPInputActionPage" element={<OTPNumbers2 />} />
          <Route
            path="/webOTPInputActionPage2"
            element={<SuccessfulAccount />}
          />
          <Route
            path="/webCompleteRegistrationPage"
            element={<CompeleteRegistration />}
          />
          <Route
            path="/webIdentifierPage"
            element={<CompleteRegistration2 />}
          />
          <Route path="/webCompleteRegistration2Page" element={<Details />} />
          <Route
            path="/webForgotPasswordPage"
            element={<WebForgotPasswordPage1 />}
          />
          <Route
            path="/webForgotPasswordPage2"
            element={<WebForgotPasswordPage2 />}
          />
          <Route
            path="/webForgotPasswordPage3"
            element={<WebForgotPasswordPage3 />}
          />
          <Route path="/webOTPInput" element={<WebForgotPasswordPage4 />} />
          <Route path="/webNewPassword1" element={<WebForgotPasswordPage5 />} />
          <Route path="/webNewPassword1" element={<OTPNumbers11 />} />
          <Route path="/splashScreen" element={<SplashScreen />} />
          <Route
            path="/onboarding1"
            element={<Onboarding1 messg={word[0]} txt={text[0]} />}
          />
          <Route
            path="/onboarding2"
            element={<Onboarding1 messg={word[1]} txt={text[1]} />}
          />
          <Route
            path="/onboarding3"
            element={<Onboarding1 messg={word[2]} txt={text[2]} />}
          />
          <Route path="/Register" element={<Register />} />
          <Route path="/SuccessPage" element={<SuccessPage />} />
          <Route path="/Dashboard" element={<WebDashboardPage/>} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
