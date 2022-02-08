/*global kakao*/
import { useState, useEffect } from 'react';
import styles from './Map.module.css';

function Map({ name, address }) {
  const sliceAddress = beforeAddr => {
    if (beforeAddr[1] === '1' || beforeAddr[1] === '2') {
      return beforeAddr.substring(7, beforeAddr.length);
    } else {
      return beforeAddr.substring(2, beforeAddr.length);
    }
  };
  const slicedAddress = sliceAddress(address);
  console.log(`${name} : ${slicedAddress}`);

  useEffect(() => {
    const mapContainer = document.getElementById('map'), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 6, // 지도의 확대 레벨
      };

    // 지도를 생성합니다
    const map = new kakao.maps.Map(mapContainer, mapOption);

    // 주소-좌표 변환 객체를 생성합니다
    const geocoder = new kakao.maps.services.Geocoder();

    // 주소로 좌표를 검색합니다
    geocoder.addressSearch(slicedAddress, function (result, status) {
      // 정상적으로 검색이 완료됐으면
      if (status === kakao.maps.services.Status.OK) {
        const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

        // 결과값으로 받은 위치를 마커로 표시합니다
        const marker = new kakao.maps.Marker({
          map: map,
          position: coords,
        });

        kakao.maps.event.addListener(marker, 'click', function () {
          // 클릭 시 네이버 지도로 해당 위치를 보여주는 새 창 띄우기
          window.open(`https://map.naver.com/v5/search/${slicedAddress}`);
        });

        // 인포윈도우로 장소에 대한 설명을 표시합니다
        const infowindow = new kakao.maps.InfoWindow({
          content: `<div style="width:150px;text-align:center;font-size:12px;padding:6px 0;">${name}</div>`,
        });
        infowindow.open(map, marker);

        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
        map.setCenter(coords);
      }
    });
  }, [slicedAddress]);

  return (
    <div>
      <div id="map" className={styles.map}></div>
    </div>
  );
}

export default Map;
