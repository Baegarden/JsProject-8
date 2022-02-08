import { useCallback, useState, useEffect } from 'react';
import styles from './PlaceList.module.css';

function PlaceList({ completeUrl, getClickedInfo }) {
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
          return (
            <li
              className={styles.placeList_li}
              key={index}
              onClick={e => changeAddress(place, e)}
            >
              {place.fclts_nm}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default PlaceList;
