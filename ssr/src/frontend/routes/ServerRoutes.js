import Home from '../containers/Home';
import Checkout from '../containers/Checkout';
import NotFound from '../containers/NotFound';

const serverRoutes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/checkout',
    component: Checkout,
    exact: true,
  },
  {
    name: 'NotFound',
    component: NotFound,
  },
];

export default serverRoutes;
