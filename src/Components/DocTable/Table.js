import axios from 'axios';
import { useEffect, useState } from 'react';
import { fetchAllUser } from '~/service/UserService';

const Table = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    // call Api
    getDatas();
  }, []);

  const getDatas = async () => {
    let res = await fetchAllUser();
    if (res && res.data) {
      setList(res.data);
    }
  };

  return (
    <div className="relative overflow-x-auto shadow-xl sm:rounded-lg m-5">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-slate-100">
          <tr>
            <th scope="col" className="px-6 py-3">
              Articles Title
            </th>
            <th scope="col" className="px-6 py-3">
              Faculty
            </th>
            <th scope="col" className="px-6 py-3">
              Date
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Delete</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => {
            return (
              <tr
                key={`article-${index}`}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {item.title}
                </th>
                <td className="px-6 py-4">{item.body}</td>
                <td className="px-6 py-4">2022-04-17T15:30</td>
                <td className="px-6 py-4 text-right">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    Edit
                  </a>
                </td>
                <td className="px-6 py-4 text-right">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    Delete
                  </a>
                </td>
              </tr>
            );
          })}
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Apple MacBook Pro 17"
            </th>
            <td className="px-6 py-4">Silver</td>
            <td className="px-6 py-4">Laptop</td>
            <td className="px-6 py-4 text-right">
              <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                Edit
              </a>
            </td>
            <td className="px-6 py-4 text-right">
              <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                Delete
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
