import { FunctionComponent, useCallback, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Button } from "react-bootstrap";
import styles from "./LogInSignUpPage.module.css";
import { Button } from "antd";
const LogInSignUpPage: FunctionComponent = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onLogInSignUpPageContainerClick = useCallback(() => {
    // Please sync "LogInpage" to the project
  }, []);

  const onFrameButtonClick = useCallback(() => {
    // Please sync "LogInpage" to the project
  }, []);

  const onSecondaryButtonClick = useCallback(() => {
    // Please sync "SignUppage" to the project
  }, []);

  return (
    <div
      className={styles.loginsignuppage}
      onClick={onLogInSignUpPageContainerClick}
      data-animate-on-scroll
    >
      <img className={styles.icon} alt="" src="App Logo.jpg" />
      <div className={styles.organizeMe}>Organize Me</div>
      <div className={styles.text} />
      <div className={styles.welcomeToOrganizeContainer}>
        <span className={styles.welcomeToOrganizeContainer1}>
          <p className={styles.welcomeToOrganizeMe}>
            <span className={styles.welcomeTo}>{`Welcome to `}</span>
            <span className={styles.organizeMe1}>Organize Me</span>
            <span className={styles.welcomeTo}>{`! `}</span>
          </p>
          <p className={styles.stayOrganizedBoost}>
            Stay organized, boost productivity, and conquer your to-do list with
            ease. Create, manage, and prioritize tasks effortlessly.
          </p>
        </span>
      </div>
      <Button
        className={styles.loginsignuppageChild}
        type="primary"
        name="LOGIN"
        onClick={onFrameButtonClick}
      >
        LOG IN
      </Button>
      <Button
        className={styles.secondaryButton}
        type="default"
        name="SIGNUP"
        onClick={onSecondaryButtonClick}
      >
        SIGN UP
      </Button>
      <div className={styles.loginsignuppageItem} />
    </div>
  );
};

export default LogInSignUpPage;
