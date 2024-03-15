import axios from './CustomAxios';

const fetchAllFaculties = () => {
  return axios.get('/faculties');
};

const createFaculty = () => {};

const deleteFaculty = () => {};

const updateFaculty = () => {};

export { fetchAllFaculties };
