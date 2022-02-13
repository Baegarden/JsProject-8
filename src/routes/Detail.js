import { useParams } from 'react-router-dom';
import PlaceList from '../components/PlaceList';
import Map from '../components/Map';
import styles from './Detail.module.css';
import { useState } from 'react';

function Detail() {
  const { type, gu } = useParams();
  const enToKo_Type = {
    soccer: '축구장',
    football: '풋살경기장',
    basketball: '농구장',
    swim: '수영장',
    pingpong: '탁구장',
    volleyball: '족구장',
    baseball: '야구장',
    badminton: '배드민턴장',
    tennis: '테니스장',
    inlineskate: '인라인스케이트',
    gateball: '게이트볼',
    sqush: '스쿼시',
    golf: '골프',
    stadium: '종합운동장',
    else: '기타',
  };

  const enToKo_Gu = {
    gihenggu: '기흥구',
    sujigu: '수지구',
    cheoingu: '처인구',
  };
  console.log(enToKo_Type[type], enToKo_Gu[gu]);
  const key =
    'B%2FRn2Bp%2FiF8pGoPMGq7pb75hle7GGDUk71rEnAuIzpIcoLMzpGNrTJFcBfqTbssZ5P4orXfbiaFiz5zHPtfaUg%3D%3D';
  const url = `http://apis.data.go.kr/4050000/sprtsfclts/getSprtsfclts?serviceKey=${key}&pageNo=1&numOfRows=274`;
  const selectedType = enToKo_Type[type];
  const selectedGu = enToKo_Gu[gu];
  const [name, setName] = useState('');
  const [address, setAddress] = useState(
    // '  경기 용인시 기흥구 한보라1로43번길 8'
    ''
  );
  const getClickedInfo = clickedInfo => {
    setName(clickedInfo.fclts_nm);
    setAddress(clickedInfo.addr);
  };

  return (
    <div>
      <div id={styles.selected_div}>
        <span id={styles.selected}>
          {selectedGu} {selectedType}
        </span>
      </div>
      <div id={styles.container}>
        <PlaceList
          completeUrl={url}
          getClickedInfo={getClickedInfo}
          type={selectedType}
          gu={selectedGu}
        ></PlaceList>
        <Map name={name} address={address}></Map>
      </div>
    </div>
  );
}

export default Detail;
