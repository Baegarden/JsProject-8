import styles from './SelectGuButton.module.css';
import * as common from './commonFunction';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function SelectGuButton({ text, gu }) {
  const { type } = useParams();
  return (
    <div className={styles.btn_background}>
      <Link to={`/${type}/${gu}`}>
        <div className={styles.btn} onClick={common.clickedText}>
          {text}
        </div>
      </Link>
    </div>
  );
}

export default SelectGuButton;
