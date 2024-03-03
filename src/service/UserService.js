import axios from 'axios';

const fetchAllUser = () => {
  return axios.get('https://jsonplaceholder.typicode.com/posts');
};

export { fetchAllUser };
