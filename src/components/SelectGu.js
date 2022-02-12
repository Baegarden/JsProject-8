import styles from './SelectGu.module.css';
import SelectGuButton from './SelectGuButton';

function SelectGu() {
  const guList = ['기흥구', '수지구', '처인구'];
  return (
    <div id={styles.selectContainer}>
      <div className={styles.selectGroup}>
        {guList.map((gu, index) => {
          return <SelectGuButton key={index} text={gu}></SelectGuButton>;
        })}
      </div>
    </div>
  );
}

export default SelectGu;
