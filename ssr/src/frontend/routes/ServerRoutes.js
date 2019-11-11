import NotFound from '../containers/NotFound';
import Discover from '../containers/Discover';
import FullMusicPlayer from '../components/FullMusicPlayer/FullMusicPlayer';

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
    path: '/player',
    component: FullMusicPlayer,
    exact: true,
  },
  {
    name: 'NotFound',
    component: NotFound,
  },
];

export default serverRoutes;
