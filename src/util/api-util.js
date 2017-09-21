import axios from 'axios';
import find from 'lodash/find';

// export function postData(body, callback, errCallback) {
//   axios.post('https://your-supet-sweer-url-endpoint')
//     .then((res) => {
//       if (callback) callback(res);
//       return res;
//     })
//     .catch((err) => {
//       if (errCallback) errCallback(err);
//       return err;
//     });
// }

export function getData(id, callback, errCallback) {
  axios.get('../data.json')
    .then((res) => {
      const user = find(res.data, { 'id': id });
      if (callback) callback(user);
      return user;
    })
    .catch((err) => {
      if (errCallback) errCallback(err);
      return err;
    });
}