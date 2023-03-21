import styles from "../styles/Onboarding-1.module.css";
import OnboardingImage from "../../../../assets/image/svg/Onboarding-1.svg";
const Onboarding1 = (props) => {
  return (
    <div className={styles.page}>
      <div className={styles.button1}>
        <button>Skip</button>
      </div>
      <img src={OnboardingImage} alt="onboarding"/>
      <div className={styles.div2}>
        <p>{props.messg}</p>
      </div>
      <div className={styles.div3}>

      <button>
        {props.txt}
        </button>

      </div>
    </div>
  );
};
export default Onboarding1;
