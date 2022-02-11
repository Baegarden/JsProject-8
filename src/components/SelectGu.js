import styles from './SelectGu.module.css';
import * as common from './commonFunction';

function SelectGu() {
  return (
    <div id={styles.selectContainer}>
      <div className={styles.selectGroup}>
        <div className={styles.Gu} onClick={common.clickedText}>
          기흥구
        </div>
        <div className={styles.Gu} onClick={common.clickedText}>
          수지구
        </div>
        <div className={styles.Gu} onClick={common.clickedText}>
          처인구
        </div>
      </div>
    </div>
  );
}

export default SelectGu;
