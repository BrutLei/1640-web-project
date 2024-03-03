import './App.css';
import 'react-toastify/dist/ReactToastify.css';

import Example from './CallApi';
import PageLogin from '~/Components/Login/PageLogin';
import Header from './Components/Header/Header';
import Table from './Components/DocTable/Table';
import MoodleAdd from './Components/ModalAddDoc/ModalAdd';
import { Bounce, ToastContainer } from 'react-toastify';

import { useState } from 'react';

function App() {
  const [showToggle, setShowToggle] = useState(false);

  function handleToggle() {
    setShowToggle(!showToggle);
  }
  return (
    <>
      <div>
        <Header />
        <div className="m-5 flex justify-between items-center">
          <p className=" text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Contributions List:
          </p>
          <button
            onClick={handleToggle}
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded inline-block"
          >
            Upload Article
          </button>
        </div>
        <Table />
        <MoodleAdd show={showToggle} handleToggle={handleToggle} />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition={Bounce}
        />
      </div>
    </>
  );
}

export default App;
