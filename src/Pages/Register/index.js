import { useState } from 'react';
import Select from 'react-tailwindcss-select';

const options = [
  { value: 'fox', label: '🦊 Fox' },
  { value: 'Butterfly', label: '🦋 Butterfly' },
  { value: 'Honeybee', label: '🐝 Honeybee' },
];

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    studentId: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement form submission logic and user registration here
    console.log('Form submitted:', formData); // Example logging
  };

  const [animal, setAnimal] = useState(null);

  const handleChangeValue = (value) => {
    console.log('value:', value);
    setAnimal(value);
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md px-8 py-4 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-4">Student Registration</h1>
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
              <label className="text-sm font-medium text-gray-700">Student ID</label>
              <input
                type="text"
                id="studentId"
                name="studentId"
                value={formData.studentId}
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
              <label htmlFor="cars">Choose a car:</label>

              <Select value={animal} onChange={handleChangeValue} options={options} />
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
