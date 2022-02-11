import styles from './SelectType.module.css';
import * as common from './commonFunction';

function SelectType() {
  return (
    <div id={styles.selectContainer}>
      <div className={styles.selectGroup}>
        <div
          className={styles.type}
          style={{
            background: 'url(img/soccer.png)',
            backgroundSize: '50px 50px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top 30% left 50%',
          }}
          onClick={common.clickedText}
        >
          축구장
        </div>
        <div
          className={styles.type}
          style={{
            background: 'url(img/football.png)',
            backgroundSize: '50px 50px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top 30% left 50%',
          }}
          onClick={common.clickedText}
        >
          풋살경기장
        </div>
        <div
          className={styles.type}
          style={{
            background: 'url(img/basketball.png)',
            backgroundSize: '50px 50px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top 30% left 50%',
          }}
          onClick={common.clickedText}
        >
          농구장
        </div>
        <div
          className={styles.type}
          style={{
            background: 'url(img/swim.png)',
            backgroundSize: '50px 50px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top 30% left 50%',
          }}
          onClick={common.clickedText}
        >
          수영장
        </div>
        <div
          className={styles.type}
          style={{
            background: 'url(img/pingpong.png)',
            backgroundSize: '50px 50px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top 30% left 50%',
          }}
          onClick={common.clickedText}
        >
          탁구장
        </div>
      </div>
      <div className={styles.selectGroup_middle}>
        <div
          className={styles.type}
          style={{
            background: 'url(img/volleyball.png)',
            backgroundSize: '50px 50px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top 30% left 50%',
          }}
          onClick={common.clickedText}
        >
          족구장
        </div>
        <div
          className={styles.type}
          style={{
            background: 'url(img/baseball.png)',
            backgroundSize: '50px 50px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top 30% left 50%',
          }}
          onClick={common.clickedText}
        >
          야구장
        </div>
        <div
          className={styles.type}
          style={{
            background: 'url(img/badminton.png)',
            backgroundSize: '50px 50px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top 30% left 50%',
          }}
          onClick={common.clickedText}
        >
          배드민턴장
        </div>
        <div
          className={styles.type}
          style={{
            background: 'url(img/tennis.png)',
            backgroundSize: '50px 50px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top 30% left 50%',
          }}
          onClick={common.clickedText}
        >
          테니스장
        </div>
        <div
          className={styles.type}
          style={{
            background: 'url(img/inlineskate.png)',
            backgroundSize: '50px 50px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top 30% left 50%',
          }}
          onClick={common.clickedText}
        >
          인라인스케이트
        </div>
      </div>
      <div className={styles.selectGroup}>
        <div
          className={styles.type}
          style={{
            background: 'url(img/gateball.png)',
            backgroundSize: '50px 50px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top 30% left 50%',
          }}
          onClick={common.clickedText}
        >
          게이트볼
        </div>
        <div
          className={styles.type}
          style={{
            background: 'url(img/sqush.png)',
            backgroundSize: '50px 50px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top 30% left 50%',
          }}
          onClick={common.clickedText}
        >
          스쿼시
        </div>
        <div
          className={styles.type}
          style={{
            background: 'url(img/golf.png)',
            backgroundSize: '50px 50px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top 30% left 50%',
          }}
          onClick={common.clickedText}
        >
          골프
        </div>
        <div
          className={styles.type}
          style={{
            background: 'url(img/stadium.png)',
            backgroundSize: '50px 50px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top 30% left 50%',
          }}
          onClick={common.clickedText}
        >
          종합운동장
        </div>
        <div
          className={styles.type}
          style={{
            background: 'url(img/else.png)',
            backgroundSize: '50px 50px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top 30% left 50%',
          }}
          onClick={common.clickedText}
        >
          기타
        </div>
      </div>
    </div>
  );
}

export default SelectType;
