import { useCallback, useState, useEffect } from 'react';
import styles from './PlaceList.module.css';
import * as common from './commonFunction';

function PlaceList({ completeUrl, getClickedInfo, type, gu }) {
  const [placeList, setPlaceList] = useState([]);

  const getInfo = useCallback(async () => {
    const json = await (
      await fetch('http://localhost:3000/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          url: completeUrl,
        }),
      })
    ).json();
    setPlaceList(JSON.parse(json).items);
    console.log(JSON.parse(json).items);
  }, [completeUrl]);

  useEffect(() => {
    getInfo();
  }, [getInfo]);

  const changeAddress = (place, event) => {
    getClickedInfo(place);
  };

  return (
    <div id={styles.placeList}>
      <ul id={styles.placeList_ul}>
        {placeList.map((place, index) => {
          if (place.fclts_type === type && place.addr.search(gu) !== -1) {
            return (
              <li
                className={styles.placeList_li}
                key={index}
                onClick={e => changeAddress(place, e)}
              >
                <div>
                  <ul className={styles.placeDetail_ul}>
                    <li className={styles.placeName}>{place.fclts_nm}</li>
                    <li>{common.sliceAddress(place.addr)}</li>
                    <li>
                      {place.poc} · {place.use_fee}
                    </li>
                  </ul>
                </div>
              </li>
            );
          } else return null;
        })}
      </ul>
    </div>
  );
}

export default PlaceList;
