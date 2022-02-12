import styles from './SelectType.module.css';
import SelectTypeButton from './SelectTypeButton';

function SelectType() {
  const typeList1 = [
    ['축구장', 'img/soccer.png'],
    ['풋살경기장', 'img/football.png'],
    ['농구장', 'img/basketball.png'],
    ['수영장', 'img/swim.png'],
    ['탁구장', 'img/pingpong.png'],
  ];
  const typeList2 = [
    ['족구장', 'img/volleyball.png'],
    ['야구장', 'img/baseball.png'],
    ['배드민턴장', 'img/badminton.png'],
    ['테니스장', 'img/tennis.png'],
    ['인라인스케이트', 'img/inlineskate.png'],
  ];
  const typeList3 = [
    ['게이트볼', 'img/gateball.png'],
    ['스쿼시', 'img/sqush.png'],
    ['골프', 'img/golf.png'],
    ['종합운동장', 'img/stadium.png'],
    ['기타', 'img/else.png'],
  ];
  return (
    <div id={styles.selectContainer}>
      <div className={styles.selectGroup}>
        {typeList1.map((type, index) => {
          return (
            <SelectTypeButton
              text={type[0]}
              imgUrl={type[1]}
              key={index}
            ></SelectTypeButton>
          );
        })}
      </div>
      <div className={styles.selectGroup_middle}>
        {typeList2.map((type, index) => {
          return (
            <SelectTypeButton
              text={type[0]}
              imgUrl={type[1]}
              key={index}
            ></SelectTypeButton>
          );
        })}
      </div>
      <div className={styles.selectGroup}>
        {typeList3.map((type, index) => {
          return (
            <SelectTypeButton
              text={type[0]}
              imgUrl={type[1]}
              key={index}
            ></SelectTypeButton>
          );
        })}
      </div>
    </div>
  );
}

export default SelectType;
