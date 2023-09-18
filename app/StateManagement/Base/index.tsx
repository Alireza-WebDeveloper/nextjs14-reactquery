import axios from 'axios';

const BaseApi = axios.create({
  baseURL: 'http://localhost:5007',
});

export default BaseApi;
