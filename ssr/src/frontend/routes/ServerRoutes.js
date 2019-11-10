import NotFound from '../containers/NotFound';
import Discover from '../containers/Discover';

const serverRoutes = [
  {
    path: '/',
    component: Discover,
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
