/* eslint-disable import/extensions */
import NotFound from '../containers/NotFound';
import Discover from '../containers/Discover';
import FullMusicPlayer from '../components/FullMusicPlayer/FullMusicPlayer.jsx';
import Register from '../containers/Register';
import Login from '../containers/Login';
import LoginLayout from '../components/LoginLayout';

const serverRoutes = [
  {
    path: '/',
    component: Discover,
    exact: true,
  },
  {
    path: '/login',
    component: Login,
    exact: true,
  },
  {
    path: '/login2',
    component: LoginLayout,
    exact: true,
  },
  {
    path: '/login3',
    component: Login,
    exact: true,
  },
  {
    path: '/register',
    component: Register,
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
