import Home from '../containers/Home';
import Checkout from '../containers/Checkout';
import NotFound from '../containers/NotFound';
import Discover from '../containers/Discover';

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
    path: '/discover',
    component: Discover,
    exact: true,
  },
  {
    name: 'NotFound',
    component: NotFound,
  },
];

export default serverRoutes;
