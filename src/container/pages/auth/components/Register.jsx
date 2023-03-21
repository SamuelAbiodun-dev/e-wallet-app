import styles from "../styles/Register.module.css";
import RegisterImage from "../../../../assets/image/svg/Register.svg";
const Register = (props) => {
  return (
    <div className={styles.page}>
      <div className={styles.div2}>
        <div>
          <img src={RegisterImage} alt="registration image" />
          <h1>Register</h1>
        </div>
      </div>
      <div className={styles.div3}>
      <input type="text" placeholder="Enter your name: "/>
      <input type="text" placeholder="Enter your email: "/>
      <input type="text" placeholder="Enter email number: "/>
      </div>
      <div className={styles.div4}>
        
      </div>
    </div>
  );
};
export default Register;
