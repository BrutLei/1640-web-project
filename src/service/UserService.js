import axios from './CustomAxios';

const fetchAllUsers = async () => {
  return axios.get('/users');
};

const registerNewUser = async (data) => {
  const { firstName, lastName, email, password, confirmPassword, faculty } = data;
  let username = `${firstName} ${lastName}`;
  axios
    .post('/users/create', {
      username: username,
      email: email,
      password: password,
      facultyId: parseInt(faculty),
      groupId: undefined,
    })
    .then(function (response) {
      console.log(response);
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
};

const Login = async (data) => {
  try {
    const { email, password } = data;
    const response = await axios.post('/users/login', { email: email, password: password });
    return response;
  } catch (error) {
    console.error('Login error:', error.name);
    return;
  }
};

const deleteUser = () => {};

const updateUser = () => {};

export { fetchAllUsers, registerNewUser, Login };
