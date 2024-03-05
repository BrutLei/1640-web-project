import AddButton from '../AddButton/AddButton';
import Table from '../DocTable/Table';

const StudentPage = ({ handleToggle }) => {
  return (
    <>
      <AddButton handleToggle={handleToggle} />
      <Table />
    </>
  );
};

export default StudentPage;
