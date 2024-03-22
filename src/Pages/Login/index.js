import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { json, useNavigate } from 'react-router-dom';
import { toast, Bounce, Zoom } from 'react-toastify';
import { login } from '~/redux/reducers/UserSlice';
// service
import { Login as loginHandler } from '~/service/UserService';

let response = [];

function Login() {
  // Check if user logged in to the website
  useEffect(() => {
    let session = sessionStorage.getItem('account');
    if (session) {
      navigate('/');
    }
  }, []);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = async (event) => {
    event.preventDefault();
    if (!email || !password) {
      toast.warn('Email/password is requires!!!');
      return;
    }
    response = await loginHandler({ email, password });
    // console.log(response);
    //Login succeed and user have faculty
    if (response && response.MS === 'Login successful' && response.EC === '0') {
      let accountData = {
        isAuthenticated: true,
        token: 'fake',
      };
      sessionStorage.setItem('account', JSON.stringify(accountData));
      sessionStorage.setItem('user', JSON.stringify(response));
      dispatch(login({ response }));

      // save user data to session
      sessionStorage.setItem('userData', JSON.stringify(response.DT));
      navigate('/');
    }
    //Login success and user have no faculty
    if (response && response.MS === 'Login successful' && response.EC !== '0') {
      toast.warn('User do not belong to any faculty', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
        transition: Zoom,
      });
    }
    // Login failed
    if (response && response.MS !== 'Login successful' && response.EC !== '0') {
      toast.error(`Login failed ${response.MS}`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      });
    }
  };
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full px-8 py-4 sm:px-4 bg-white rounded-lg shadow-md md:w-4/6 sm:w-80 sm:h-3/4 sm:m-5 sm:flex sm:flex-col sm:justify-center sm:items-center">
        <h1 className="text-2xl font-bold text-center mb-4 block w-full md:uppercase md:text-start">
          Welcome Back, Student
        </h1>
        <form className="space-y-4 md:w-full">
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">Student Email</label>
            <input
              type="text"
              id="username"
              name="username"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col items-start justify-between">
            <div className="flex items-center mb-4">
              <input type="checkbox" id="remember_me" name="remember_me" className="w-4 h-4 mr-2" />
              <label htmlFor="remember_me" className="text-sm text-gray-700">
                Remember Me
              </label>
            </div>
            <a href="#" className="text-sm text-blue-500 hover:underline">
              Forgot Password?
            </a>
          </div>
          <button
            type="button"
            // disabled={email && password ? false : true}
            onClick={onLogin}
            className="w-full py-2 text-center bg-blue-500 rounded-md text-white font-medium hover:bg-blue-700"
          >
            Login
          </button>
        </form>
        <p className="text-center mt-4 text-sm text-gray-500">
          Don't have an account?{' '}
          <a href="#" className="text-blue-500 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
