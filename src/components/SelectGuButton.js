import styles from './SelectGuButton.module.css';
import * as common from './commonFunction';

function SelectGuButton({ text }) {
  return (
    <div className={styles.btn} onClick={common.clickedText}>
      {text}
    </div>
  );
}

export default SelectGuButton;
