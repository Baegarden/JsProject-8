export function sliceAddress(beforeAddr) {
  if (beforeAddr[1] === '1' || beforeAddr[1] === '2') {
    return beforeAddr.substring(7, beforeAddr.length);
  } else {
    return beforeAddr.substring(2, beforeAddr.length);
  }
}
