/* eslint-disable no-restricted-syntax */

const getQueryParams = (queryObj: any) => {
  const str = [];
  for (const params in queryObj) {
    // eslint-disable-next-line no-prototype-builtins
    if (queryObj.hasOwnProperty(params)) {
      if (queryObj[params] !== 'all' && queryObj[params] !== '') {
        str.push(`${params}=${queryObj[params]}`);
      }
    }
  }
  return str.join('&');
};

export default getQueryParams;
