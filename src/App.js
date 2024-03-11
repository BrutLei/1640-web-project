import { Bounce, ToastContainer } from 'react-toastify';
import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';

import PageLogin from '~/Components/LoginPage/PageLogin';
import Header from './Components/Header/Header';
import MoodleAdd from './Components/ModalAddDoc/ModalAdd';
import StudentPage from './Components/StudentPage/StudentPage';
import AddUserPage from './Components/AddUser';

function App() {
  const [showToggle, setShowToggle] = useState(false);
  function handleToggle() {
    setShowToggle(!showToggle);
  }

  return (
    <>
      <Header />
      <Routes path="/">
        <Route path="/login" element={<PageLogin />}></Route>
        <Route path="/" element={<StudentPage handleToggle={handleToggle} />}></Route>
        <Route path="/addUser" element={<AddUserPage />}></Route>
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
