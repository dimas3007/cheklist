import axios from 'axios';

const API_PATH = 'http://18.139.50.74:8080';

const sendAPI = (data = {}) => {
  const token = localStorage.getItem('token') ? localStorage.getItem('token') : ''
  const sendAPI = {
    method: data.method,
    url: API_PATH + data.url,
    params: data.params,
    data: data.data,
    headers: {
      'Authorization': `Bearer ${token}`
    }
  };

  console.log('TOKEN', token)

  const optionsAPI = new Promise((resolve, reject) => {
    axios
      .request(sendAPI)
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        reject({
          status: 'error',
          error: error.response,
        });
      });
  });

  return optionsAPI;
};

export default sendAPI;
