import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '45fb35dc51dd91505af9a41746a361a1',
    language: 'ko-KR',
  },
});

export default instance;
