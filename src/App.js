import { Route, Routes } from 'react-router-dom';
import { Fragment } from 'react';
// Import route
import { publicRoutes, privateroutes } from './routes';

function App() {
  return (
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
  );
}

export default App;
