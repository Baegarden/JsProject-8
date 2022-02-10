import styles from './SelectType.module.css';

function SelectType() {
  const clickedType = event => {
    console.log(event.target.innerText);
  };

  return (
    <div>
      <div>
        <button
          id={styles.soccer}
          style={{
            background: 'url(img/soccer.png)',
            backgroundSize: '50px 50px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top 30% left 50%',
          }}
          onClick={clickedType}
        >
          축구장
        </button>
        <button
          id={styles.football}
          style={{
            background: 'url(img/football.png)',
            backgroundSize: '50px 50px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top 30% left 50%',
          }}
          onClick={clickedType}
        >
          풋살경기장
        </button>
        <button
          id={styles.basketball}
          style={{
            background: 'url(img/basketball.png)',
            backgroundSize: '50px 50px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top 30% left 50%',
          }}
          onClick={clickedType}
        >
          농구장
        </button>
        <button
          id={styles.swim}
          style={{
            background: 'url(img/swim.png)',
            backgroundSize: '50px 50px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top 30% left 50%',
          }}
          onClick={clickedType}
        >
          수영장
        </button>
        <button
          id={styles.pingpong}
          style={{
            background: 'url(img/pingpong.png)',
            backgroundSize: '50px 50px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top 30% left 50%',
          }}
          onClick={clickedType}
        >
          탁구장
        </button>
      </div>
      <div>
        <button
          id={styles.volleyball}
          style={{
            background: 'url(img/volleyball.png)',
            backgroundSize: '50px 50px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top 30% left 50%',
          }}
          onClick={clickedType}
        >
          족구장
        </button>
        <button
          id={styles.baseball}
          style={{
            background: 'url(img/baseball.png)',
            backgroundSize: '50px 50px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top 30% left 50%',
          }}
          onClick={clickedType}
        >
          야구장
        </button>
        <button
          id={styles.badminton}
          style={{
            background: 'url(img/badminton.png)',
            backgroundSize: '50px 50px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top 30% left 50%',
          }}
          onClick={clickedType}
        >
          배드민턴장
        </button>
        <button
          id={styles.tennis}
          style={{
            background: 'url(img/tennis.png)',
            backgroundSize: '50px 50px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top 30% left 50%',
          }}
          onClick={clickedType}
        >
          테니스장
        </button>
        <button
          id={styles.inlineskate}
          style={{
            background: 'url(img/inlineskate.png)',
            backgroundSize: '50px 50px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top 30% left 50%',
          }}
          onClick={clickedType}
        >
          인라인스케이트
        </button>
      </div>
      <div>
        <button
          id={styles.gateball}
          style={{
            background: 'url(img/gateball.png)',
            backgroundSize: '50px 50px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top 30% left 50%',
          }}
          onClick={clickedType}
        >
          게이트볼
        </button>
        <button
          id={styles.sqush}
          style={{
            background: 'url(img/sqush.png)',
            backgroundSize: '50px 50px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top 30% left 50%',
          }}
          onClick={clickedType}
        >
          스쿼시
        </button>
        <button
          id={styles.golf}
          style={{
            background: 'url(img/golf.png)',
            backgroundSize: '50px 50px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top 30% left 50%',
          }}
          onClick={clickedType}
        >
          골프
        </button>
        <button
          id={styles.stadium}
          style={{
            background: 'url(img/stadium.png)',
            backgroundSize: '50px 50px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top 30% left 50%',
          }}
          onClick={clickedType}
        >
          종합운동장
        </button>
        <button
          id={styles.else}
          style={{
            background: 'url(img/else.png)',
            backgroundSize: '50px 50px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top 30% left 50%',
          }}
          onClick={clickedType}
        >
          기타
        </button>
      </div>
    </div>
  );
}

export default SelectType;
