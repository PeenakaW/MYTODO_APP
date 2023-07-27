import { FunctionComponent, useCallback } from "react";
import "antd/dist/antd.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Input } from "antd";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import styles from "./SignUppage.module.css";
const SignUppage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onSignUppageContainerClick = useCallback(() => {
    navigate("/mainpage");
  }, [navigate]);

  const onSecondaryButtonClick = useCallback(() => {
    navigate("/mainpage");
  }, [navigate]);

  return (
    <div className={styles.signuppage} onClick={onSignUppageContainerClick}>
      <Button
        className={styles.secondaryButton}
        variant="primary"
        onClick={onSecondaryButtonClick}
      >
        SIGN UP
      </Button>
      <Link className={styles.alreadyHaveAn} to="/loginpage">
        Already Have an Account?
      </Link>
      <img className={styles.signuppageChild} alt="" src="/line-2@2x.png" />
      <div className={styles.frame}>
        <img className={styles.icon} alt="" src="/01-1@2x.png" />
        <div className={styles.organizeMe}>Organize Me</div>
      </div>
      <Input
        className={styles.frame1}
        type="text"
        style={{ width: "275px" }}
        size="middle"
        placeholder="First Name"
        allowClear
      />
      <Input
        className={styles.frame2}
        type="text"
        style={{ width: "275px" }}
        size="middle"
        placeholder="Last Name"
        allowClear
      />
      <Input
        className={styles.frame3}
        type="email"
        style={{ width: "275px" }}
        size="middle"
        placeholder="Email"
        allowClear
      />
      <Input.Password
        className={styles.frameAntinputpassword}
        style={{ width: "275px" }}
        size="middle"
        placeholder="Password"
        allowClear
      />
      <div className={styles.frame4}>
        <img className={styles.facebook2Icon} alt="" src="/facebook-2@2x.png" />
        <img className={styles.facebook2Icon} alt="" src="/whatsapp-2@2x.png" />
        <img
          className={styles.instagram12}
          alt=""
          src="/instagram-1-2@2x.png"
        />
      </div>
    </div>
  );
};

export default SignUppage;
