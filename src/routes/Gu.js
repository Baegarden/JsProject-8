import SelectGu from '../components/SelectGu';
import styles from './Gu.module.css';
import logoImg from '../img/logo.png';

// url이 동적으로 바뀌기 때문에 pubilc 폴더에서 이미지 로드가 안됨(Logo Component에서) -> 직접 import해줘야함
// ./ = 본인 디렉토리  ../ = 부모 디렉토리
function Gu() {
  return (
    <div>
      <div className="custom-shape-divider-top-1645273413">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className={styles.logo_div}>
        <img className={styles.logo} src={logoImg} alt="logo"></img>
        공공체육시설 조회
      </div>
      <SelectGu></SelectGu>;
    </div>
  );
}

export default Gu;
