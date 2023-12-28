function getQueryParams() {
  const queryString = window.location.search;
  return new URLSearchParams(queryString);
}

function setLocateParam(param: string, value: any) {
  const queryParams = getQueryParams();
  queryParams.set(param, value);
  const newUrl =
    window.location.protocol +
    '//' +
    window.location.host +
    window.location.pathname +
    '?' +
    queryParams;
  window.history.pushState({ path: newUrl }, '', newUrl);
}

function setLocateParamReload(param: string, value: any) {
  setLocateParam(param, value);
  window.location.reload();
}

function getLocateParam(param: string) {
  const queryParams = getQueryParams();
  return queryParams.get(param);
}

function delLocateParam(param: string) {
   const queryParams = getQueryParams();
   queryParams.delete(param);const newUrl =
   window.location.protocol +
   '//' +
   window.location.host +
   window.location.pathname +
   '?' +
   queryParams;
 window.history.pushState({ path: newUrl }, '', newUrl);
 }

function removeAllParams() {
  const urlWithoutParams =
    window.location.protocol +
    '//' +
    window.location.host +
    window.location.pathname;

  window.history.replaceState({}, document.title, urlWithoutParams);
}

export {
  setLocateParam,
  getLocateParam,
  delLocateParam,
  removeAllParams,
  setLocateParamReload,
};
