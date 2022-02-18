import Logo from '../components/Logo';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

function Home() {
  return (
    <div>
      <Logo></Logo>
      <div id={styles.selectContainer}>
        <div className={styles.btn_background}>
          <Link to={`/select`}>
            <div className={styles.btn}>시작하기</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
