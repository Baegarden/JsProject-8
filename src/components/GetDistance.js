/*global kakao*/
import * as common from './commonFunction';
import { useState, useEffect } from 'react';

function GetDistance({ myLatitude, myLongitude, placeAddress }) {
  const [distance, setDistance] = useState(0);
  useEffect(() => {
    // 주소-좌표 변환 객체를 생성합니다
    const geocoder = new kakao.maps.services.Geocoder();

    let placeLatitude = 0;
    let placeLongitude = 0;
    // 주소로 좌표를 검색합니다
    geocoder.addressSearch(placeAddress, function (result, status) {
      // 정상적으로 검색이 완료됐으면
      if (status === kakao.maps.services.Status.OK) {
        placeLatitude = result[0].y;
        placeLongitude = result[0].x;
        setDistance(
          common.calculateDistance(
            myLatitude,
            myLongitude,
            Number(placeLatitude),
            Number(placeLongitude)
          )
        );
      }
    });
  }, [myLatitude, myLongitude, placeAddress]);
  return (
    <span
      style={{
        float: 'right',
        textAlign: 'right',
        paddingRight: '10px',
      }}
    >
      거리 : {distance}
    </span>
  );
}

export default GetDistance;
