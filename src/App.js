import PlaceList from './components/PlaceList';
import Map from './components/Map';
import SelectType from './components/SelectType';
import SelectGu from './components/SelectGu';
import { useState } from 'react';
import styles from './App.module.css';

function App() {
  const key =
    'B%2FRn2Bp%2FiF8pGoPMGq7pb75hle7GGDUk71rEnAuIzpIcoLMzpGNrTJFcBfqTbssZ5P4orXfbiaFiz5zHPtfaUg%3D%3D';
  const url = `http://apis.data.go.kr/4050000/sprtsfclts/getSprtsfclts?serviceKey=${key}&pageNo=1&numOfRows=274`;
  const type = '농구장';
  const gu = '기흥구';
  const [name, setName] = useState('');
  const [address, setAddress] = useState('  제주특별자치도 제주시 첨단로 242');
  const getClickedInfo = clickedInfo => {
    setName(clickedInfo.fclts_nm);
    setAddress(clickedInfo.addr);
  };

  return (
    <div>
      <SelectType></SelectType>
      {/* <SelectGu></SelectGu> */}
      {/* <div id={styles.selected_div}>
        <span id={styles.selected}>
          {gu} {type}
        </span>
      </div>
      <div id={styles.container}>
        <PlaceList
          completeUrl={url}
          getClickedInfo={getClickedInfo}
          type={type}
          gu={gu}
        ></PlaceList>
        <Map name={name} address={address}></Map>
      </div> */}
    </div>
  );
}

export default App;
