import PlaceList from './components/PlaceList';
import Map from './components/Map';
import { useCallback, useState, useEffect } from 'react';
import styles from './App.module.css';

function App() {
  const key =
    'B%2FRn2Bp%2FiF8pGoPMGq7pb75hle7GGDUk71rEnAuIzpIcoLMzpGNrTJFcBfqTbssZ5P4orXfbiaFiz5zHPtfaUg%3D%3D';
  const url = `http://apis.data.go.kr/4050000/sprtsfclts/getSprtsfclts?serviceKey=${key}&pageNo=1&numOfRows=274`;
  const [address, setAddress] = useState('제주특별자치도 제주시 첨단로 242');
  const [name, setName] = useState('');
  const getClickedInfo = clickedInfo => {
    setName(clickedInfo.fclts_nm);
    setAddress(clickedInfo.addr);
  };

  return (
    <div id={styles.container}>
      <PlaceList completeUrl={url} getClickedInfo={getClickedInfo}></PlaceList>
      <Map name={name} address={address}></Map>
    </div>
  );
}

export default App;
