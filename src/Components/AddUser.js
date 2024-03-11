import { useState } from 'react';
import { toast } from 'react-toastify';
import { createUser } from '~/service/UserService';

const AddUserPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name && email && city) {
      let res = await createUser(name, email, city);
      if (res) {
        console.log(res);
      } else {
        toast.error('Create new user failed');
      }
    }
  };
  return (
    <div className="flex items-center justify-center h-96 w-50">
      <form className="">
        <legend>Add new user</legend>
        <div className="grid gap-4 grid-cols-1">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            ></input>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            ></input>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">City</label>
            <input
              type="text"
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            ></input>
          </div>
          <button
            type="button"
            onClick={handleSubmit}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUserPage;
