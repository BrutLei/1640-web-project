import axios from './CustomAxios';

const fetchAllUser = () => {
  return axios.get('api/users');
};

// const postCreateUser = (name, job) => {
//   return axios.post('api/users', { name: name, job: job });
// };

const handleLogin = (email, password) => {
  return axios.post('/api/login', { email, password });
};

const createUser = (email, name, city) => {
  return axios.post('/api/user', { email, name, city });
};

export { fetchAllUser, handleLogin, createUser };
