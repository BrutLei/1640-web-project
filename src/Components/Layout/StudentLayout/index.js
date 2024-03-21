import { useEffect, useState } from 'react';
import Header from './Header';
import Table from './Table';

function StudentLayout({ children }) {
  const [studentData, setStudentData] = useState([]);

  useEffect(() => {
    // get user data
  }, []);

  return (
    <div>
      <Header />
      <div>
        <div className="content">
          {children}
          <Table />
        </div>
      </div>
    </div>
  );
}

export default StudentLayout;
