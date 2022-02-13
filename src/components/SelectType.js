import styles from './SelectType.module.css';
import SelectTypeButton from './SelectTypeButton';

function SelectType() {
  const typeList1 = [
    ['축구장', 'img/soccer.png', 'soccer'],
    ['풋살경기장', 'img/football.png', 'football'],
    ['농구장', 'img/basketball.png', 'basketball'],
    ['수영장', 'img/swim.png', 'swim'],
    ['탁구장', 'img/pingpong.png', 'pingpong'],
  ];
  const typeList2 = [
    ['족구장', 'img/volleyball.png', 'volleyball'],
    ['야구장', 'img/baseball.png', 'baseball'],
    ['배드민턴장', 'img/badminton.png', 'badminton'],
    ['테니스장', 'img/tennis.png', 'tennis'],
    ['인라인스케이트', 'img/inlineskate.png', 'inlineskate'],
  ];
  const typeList3 = [
    ['게이트볼', 'img/gateball.png', 'gateball'],
    ['스쿼시', 'img/sqush.png', 'sqush'],
    ['골프', 'img/golf.png', 'golf'],
    ['종합운동장', 'img/stadium.png', 'stadium'],
    ['기타', 'img/else.png', 'else'],
  ];
  return (
    <div id={styles.selectContainer}>
      <div className={styles.selectGroup}>
        {typeList1.map((type, index) => {
          return (
            <SelectTypeButton
              text={type[0]}
              imgUrl={type[1]}
              type={type[2]}
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
              type={type[2]}
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
              type={type[2]}
              key={index}
            ></SelectTypeButton>
          );
        })}
      </div>
    </div>
  );
}

export default SelectType;
