import { useEffect, useState } from 'react';
function Table() {
  const [list, setList] = useState([]);
  useEffect(() => {
    // call Api
    getDatas();
  }, []);

  const getDatas = () => {
    let res = null;
    console.log(res);
    setList([]);
    return;
  };

  return (
    <div className="relative overflow-x-auto shadow-xl sm:rounded-lg m-5 top-10 w-100">
      <table className="w-full text-sm text-left rtl:text-right table-auto text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-slate-100">
          <tr>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              Title
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">URL</div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">
                Submitted Date
                <a href="#">
                  <svg
                    className="w-3 h-3 ms-1.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                  </svg>
                </a>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">
                Status
                <a href="#">
                  <svg
                    className="w-3 h-3 ms-1.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                  </svg>
                </a>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">
                Year
                <a href="#">
                  <svg
                    className="w-3 h-3 ms-1.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                  </svg>
                </a>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white">
            <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap ">
              1
            </th>
            <td className="px-6 py-4">abc dè gh jkl</td>
            <td className="px-6 py-4">http://abc.com</td>
            <td className="px-6 py-4">{new Date().toString()}</td>
            <td className="px-6 py-4 ">
              <p className="bg-blue-500 hover:bg-blue-700 text-white text-center font-bold py-2 px-4 rounded-full">
                Reviewing
              </p>
            </td>
            <td className="px-6 py-4">2022</td>
            <td className="px-6 py-4">
              <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline m-1">
                Edit
              </a>
              <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline m-1">
                Delete
              </a>
            </td>
          </tr>
          <tr className="bg-white">
            <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap ">
              1
            </th>
            <td className="px-6 py-4">abc dè gh jkl</td>
            <td className="px-6 py-4">http://abc.com</td>
            <td className="px-6 py-4">{new Date().toString()}</td>
            <td className="px-6 py-4 ">
              <p className="bg-red-600 hover:bg-red-700 text-white text-center font-bold py-2 px-4 rounded-full">
                Reject
              </p>
            </td>
            <td className="px-6 py-4">2022</td>
            <td className="px-6 py-4">
              <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline m-1">
                Edit
              </a>
              <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline m-1">
                Delete
              </a>
            </td>
          </tr>
          <tr className="bg-white">
            <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap ">
              1
            </th>
            <td className="px-6 py-4">abc dè gh jkl</td>
            <td className="px-6 py-4">http://abc.com</td>
            <td className="px-6 py-4">{new Date().toString()}</td>
            <td className="px-6 py-4 ">
              <p className="bg-green-500 hover:bg-green-700 text-white text-center font-bold py-2 px-4 rounded-full">
                Approved
              </p>
            </td>
            <td className="px-6 py-4">2022</td>
            <td className="px-6 py-4">
              <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline m-1">
                Edit
              </a>
              <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline m-1">
                Delete
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
