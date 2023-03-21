import chatIcon from "../../../../assets/image/svg/chatIcon.svg";
import styles from "../styles/splashScreen.module.css";
function SplashScreen() {
  return (
    <div className={styles.page}>
      <img src={chatIcon} alt="chat-icon" className={styles.img} />
    </div>
  );
}
export default SplashScreen;
