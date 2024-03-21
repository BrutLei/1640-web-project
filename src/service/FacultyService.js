import axios from './CustomAxios';

const fetchAllFaculties = async () => {
  return axios.get('/faculties');
};

const createFaculty = () => {};

const deleteFaculty = () => {};

const updateFaculty = () => {};

export { fetchAllFaculties };
