import { FunctionComponent, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import styles from "./Mainpage.module.css";
const Mainpage: FunctionComponent = () => {
  const onMainpageContainerClick = useCallback(() => {
    // Please sync "Addingpage" to the project
  }, []);

  const onSystemUiconsbuttonAddClick = useCallback(() => {
    // Please sync "Addingpage" to the project
  }, []);

  return (
    <div className={styles.mainpage} onClick={onMainpageContainerClick}>
      <img className={styles.icon} alt="" src="/01-1@2x.png" />
      <div className={styles.calendar} />
      <div className={styles.frame}>
        <div className={styles.myTasks}>My Tasks</div>
        <div className={styles.thJuly2023}>27th July 2023</div>
      </div>
      <div className={styles.frame1}>
        <Form.Check className={styles.materialSymbolscheckvariantFormcheck} />
        <div
          className={styles.monthlyGeneralMeeting}
        >{`Monthly General meeting `}</div>
      </div>
      <div className={styles.frame2}>
        <Form.Check className={styles.materialSymbolscheckvariantFormcheck} />
        <div className={styles.gymPracticies}>{`Gym Practicies `}</div>
      </div>
      <div className={styles.frame3}>
        <Form.Check className={styles.materialSymbolscheckvariantFormcheck} />
        <div className={styles.gymPracticies}>Finalising Figma Design</div>
      </div>
      <div className={styles.frame4}>
        <Form.Check className={styles.materialSymbolscheckvariantFormcheck} />
        <div className={styles.gymPracticies}>{`Monthly General meeting `}</div>
      </div>
      <div className={styles.frame5}>
        <Form.Check className={styles.materialSymbolscheckvariantFormcheck} />
        <div className={styles.gymPracticies}>{`Gym Practicies `}</div>
      </div>
      <div className={styles.frame6}>
        <Form.Check className={styles.materialSymbolscheckvariantFormcheck} />
        <div className={styles.gymPracticies}>Finalising Figma Design</div>
      </div>
      <div className={styles.frame7}>
        <Form.Check className={styles.materialSymbolscheckvariantFormcheck} />
        <div className={styles.gymPracticies}>{`Preparing Presentations `}</div>
      </div>
      <div className={styles.frame8}>
        <div className={styles.organizeMe}>Organize Me</div>
        <Button
          className={styles.systemUiconsbuttonAdd}
          variant="outline-secondary"
          size="sm"
          onClick={onSystemUiconsbuttonAddClick}
        >
          Add
        </Button>
        <div className={styles.materialSymbolscheck}>
          <img
            className={styles.property1defaultIcon}
            alt=""
            src="/property-1default.svg"
          />
          <img
            className={styles.property1variant2Icon}
            alt=""
            src="/property-1variant2.svg"
          />
        </div>
      </div>
      <div className={styles.frame9}>
        <div className={styles.frame10}>
          <Form.Check
            className={styles.materialSymbolscheckvariantFormcheck7}
          />
          <Form.Check
            className={styles.materialSymbolscheckvariantFormcheck8}
          />
        </div>
        <div className={styles.frame11}>
          <div className={styles.groceryShopping}>{`Grocery Shopping  `}</div>
          <div
            className={styles.preparingPresentations1}
          >{`Preparing Presentations `}</div>
          <img
            className={styles.materialSymbolscheckIcon}
            alt=""
            src="/materialsymbolscheck.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
