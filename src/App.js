import './App.css';
import Example from './CallApi';

import PageLogin from '~/Components/Login/PageLogin';
import Header from './Components/Header/Header';
import Table from './Components/DocTable/Table';
import { Container } from 'react-dom';

function App() {
  return (
    <div>
      <Header />
      <Table />
    </div>
  );
}

export default App;
