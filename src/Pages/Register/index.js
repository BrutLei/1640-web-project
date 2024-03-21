import { useEffect, useState } from 'react';
import { toast, Slide, Zoom, Flip, Bounce } from 'react-toastify';

// services
import { fetchAllFaculties } from '~/service/FacultyService';
import { registerNewUser } from '~/service/UserService';

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    faculty: '',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement form submission logic and user registration here
    // console.log('Form submitted:', formData);
    // Example logging
    let response = registerNewUser(formData);
    if (response) {
      toast.success('🦄 Create new user succeed!', {
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
      setFormData({ firstName: '', lastName: '', email: '', password: '', confirmPassword: '', faculty: '' });
    }
  };
  const [options, setOptions] = useState([]);
  useEffect(() => {
    getOptions();
  }, []);

  const getOptions = async () => {
    let res = await fetchAllFaculties();
    if (res) {
      setOptions(res);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg px-8 py-4 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-4 uppercase">Student Registration</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="cars" className="block mb-2 text-sm font-medium text-gray-900">
                Choose a faculty:
              </label>
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                onChange={handleChange}
                name="faculty"
                value={formData.faculty}
                required
              >
                <option value="">Choose a faculty</option>
                {options.length > 0
                  ? options.map((item, index) => {
                      return (
                        <option key={index} value={item.id}>
                          {item.name}
                        </option>
                      );
                    })
                  : ''}
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-2 text-center bg-blue-500 rounded-md text-white font-medium hover:bg-blue-700"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
