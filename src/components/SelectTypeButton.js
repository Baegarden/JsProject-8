import styles from './SelectTypeButton.module.css';
import * as common from './commonFunction';
import { Link } from 'react-router-dom';

function SelectTypeButton({ text, imgUrl, type }) {
  return (
    <div className={styles.btn_background}>
      <Link to={`/select/${type}`}>
        <div
          className={styles.btn}
          style={{
            background: `url(${imgUrl})`,
            backgroundSize: '50px 50px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top 30% left 50%',
          }}
          onClick={common.clickedText}
        >
          {text}
        </div>
      </Link>
    </div>
  );
}

export default SelectTypeButton;
