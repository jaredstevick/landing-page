export function postData(body, callback, errCallback) {
  axios.post('https://your-supet-sweer-url-endpoint')
    .then((res) => {
      if (callback) callback(res);
      return res;
    })
    .catch((err) => {
      if (errCallback) errCallback(err);
      return err;
    });
}

export function getData(id, callback, errCallback) {
  axios.post(`https://your-super-sweet-url-endpoint/${id}`)
    .then((res) => {
      if (callback) callback(res);
      return res;
    })
    .catch((err) => {
      if (errCallback) errCallback(err);
      return err;
    });
}