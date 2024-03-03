import axios from './CustomAxios';

const fetchAllUser = () => {
  return axios.get('api/users?page=2');
};

const postCreateUser = (name, job) => {
  return axios.post('api/users', { name: name, job: job });
};

export { fetchAllUser, postCreateUser };
