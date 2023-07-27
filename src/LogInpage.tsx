import { FunctionComponent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Button, Form } from "react-bootstrap";
import { Button,Form } from "antd";
import styles from "./LogInpage.module.css";
const LogInpage: FunctionComponent = () => {
  return (
    <div className={styles.loginpage}>
      <Button className={styles.secondaryButton} variant="primary">
        LOG IN
      </Button>
      <img className={styles.loginpageChild} alt="" src="/line-1@2x.png" />
      <div className={styles.frame}>
        <img className={styles.icon} alt="" src="/01-1@2x.png" />
        <div className={styles.organizeMe}>Organize Me</div>
      </div>
      <Form.Group className={styles.frameFormgroup}>
        <Form.Control type="text" name="Username" placeholder="Username" />
      </Form.Group>
      <Form.Group className={styles.frameFormgroup1}>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <div className={styles.frame1}>
        <a className={styles.createAnAccount} target="_blank">
          Create an Account
        </a>
        <div className={styles.forgotPassword}>Forgot Password ?</div>
      </div>
      <div className={styles.frame2}>
        <a
          className={styles.facebook1}
          href="https://www.facebook.com"
          target="_blank"
        />
        <a className={styles.whatsapp1} href="tel:+94703189612" />
        <img
          className={styles.instagram11}
          alt=""
          src="/instagram-1-1@2x.png"
        />
      </div>
    </div>
  );
};

export default LogInpage;
