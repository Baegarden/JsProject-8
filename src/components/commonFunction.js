export function sliceAddress(beforeAddr) {
  if (beforeAddr[1] === '1' || beforeAddr[1] === '2') {
    return beforeAddr.substring(7, beforeAddr.length);
  } else {
    return beforeAddr.substring(2, beforeAddr.length);
  }
}

export function sliceNumber(number) {
  return (
    number.substring(0, 3) +
    '-' +
    number.substring(3, 6) +
    '-' +
    number.substring(6, 10)
  );
}

export function clickedText(event) {
  console.log(event.target.innerText);
}

export function calculateDistance(lat1, lon1, lat2, lon2) {
  if (lat1 === lat2 && lon1 === lon2) return 0;

  const radLat1 = (Math.PI * lat1) / 180;
  const radLat2 = (Math.PI * lat2) / 180;
  const theta = lon1 - lon2;
  const radTheta = (Math.PI * theta) / 180;
  let dist =
    Math.sin(radLat1) * Math.sin(radLat2) +
    Math.cos(radLat1) * Math.cos(radLat2) * Math.cos(radTheta);
  if (dist > 1) dist = 1;

  dist = Math.acos(dist);
  dist = (dist * 180) / Math.PI;
  dist = dist * 60 * 1.1515 * 1.609344 * 1000;
  if (dist < 100) dist = Math.round(dist / 10) * 10;
  else dist = Math.round(dist / 100) * 100;

  const strDist = String(dist);
  return strDist[0] + '.' + strDist[1] + 'km';
}
