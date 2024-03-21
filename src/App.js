import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Fragment } from 'react';
// css
import 'react-toastify/dist/ReactToastify.css';
// Import route
import { publicRoutes, privateroutes } from './routes';

function App() {
  return (
    <>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.component;
          let Layout = null;

          if (route.layout) {
            Layout = route.layout;
          } else {
            Layout = Fragment;
          }

          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
