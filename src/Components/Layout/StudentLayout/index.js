import Header from './Header';
import Table from './Table';

function StudentLayout({ children }) {
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
