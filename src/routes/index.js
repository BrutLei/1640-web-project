// Import Pages
import Home from '~/Pages/Home';
import Login from '~/Pages/Login';
import Register from '~/Pages/Register';

// Import Layouts
import { StudentLayout } from '~/Components/Layout';
import { AdminLayout } from '~/Components/Layout';

const publicRoutes = [
  { path: '/', component: Home, layout: StudentLayout },
  { path: '/login', component: Login, layout: null },
  { path: '/register', component: Register, layout: null },
];

const privateroutes = [];

export { publicRoutes, privateroutes };
