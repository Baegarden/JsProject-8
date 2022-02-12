import styles from './SelectTypeButton.module.css';
import * as common from './commonFunction';

function SelectTypeButton({ text, imgUrl }) {
  return (
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
  );
}

export default SelectTypeButton;
