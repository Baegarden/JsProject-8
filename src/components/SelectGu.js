import styles from './SelectGu.module.css';
import SelectGuButton from './SelectGuButton';

function SelectGu() {
  const guList = [
    ['기흥구', 'gihenggu'],
    ['수지구', 'sujigu'],
    ['처인구', 'cheoingu'],
  ];
  return (
    <div id={styles.selectContainer}>
      <div className={styles.selectGroup}>
        {guList.map((gu, index) => {
          return (
            <SelectGuButton
              key={index}
              text={gu[0]}
              gu={gu[1]}
            ></SelectGuButton>
          );
        })}
      </div>
    </div>
  );
}

export default SelectGu;
