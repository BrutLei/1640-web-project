import { useRef, useState } from 'react';
import './styles.css';
import { useLocation } from 'react-router-dom';

export default function Header() {
  const navRef = useRef();
  const location = useLocation();

  const showNavbar = () => {
    navRef.current.classList.toggle('sm:hidden');
    navRef.current.classList.toggle('lg:block');
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-700 p-6">
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounde0 text-white border-teal-400 hover:text-white hover:border-white"
          onClick={showNavbar}
        >
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Home</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div ref={navRef} className="text-sm lg:flex-grow">
          <a href="/" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
            Home
          </a>
        </div>
        <div>
          <a
            href="/login"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          >
            Login
          </a>
        </div>
      </div>
    </nav>
  );
}
