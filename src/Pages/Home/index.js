import { Fragment, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    let session = sessionStorage.getItem('account');
    if (!session) {
      navigate('/login');
    }
  }, []);
  return Fragment;
}

export default Home;
