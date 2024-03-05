import { Bounce, ToastContainer } from 'react-toastify';
import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';

import Example from './CallApi';
import PageLogin from '~/Components/LoginPage/PageLogin';
import Header from './Components/Header/Header';
import Table from './Components/DocTable/Table';
import MoodleAdd from './Components/ModalAddDoc/ModalAdd';
import Register from './Components/Register/Register';
import StudentPage from './Components/StudentPage/StudentPage';

function App() {
  const [showToggle, setShowToggle] = useState(false);
  function handleToggle() {
    setShowToggle(!showToggle);
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" element={<PageLogin />}></Route>
        <Route path="/" element={<StudentPage handleToggle={handleToggle} />}></Route>
      </Routes>
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
    </>
  );
}

export default App;
