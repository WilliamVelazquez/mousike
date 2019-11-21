import React from 'react';
import {
  // BrowserRouter,
  Router,
  Switch,
  Route,
} from 'react-router-dom';
import '@babel/polyfill';

// import Layout from '../components/Layout';
import { createBrowserHistory } from 'history';
import NotFound from '../containers/NotFound';
import Discover from '../containers/Discover';
import FullMusicPlayer from '../components/experiments/FullMusicPlayer/FullMusicPlayer';
import Register from '../containers/Register3';
import Login from '../containers/Login3';
import Hamburger from '../components/experiments/HamburgerMenu/Hamburger';

const App = ({ isLogged }) => {
  // console.log('ratata islogged', isLogged);
  const history = createBrowserHistory();
  return (
    <Router history={history}>
      {/* behagoras if uncomment the images stop loading */}
      {/* <Layout> */}
      <Switch>
        <Route exact path="/" component={isLogged ? Discover : Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        {/* <Route exact path="/login2" component={LoginLayout} /> */}
        <Route exact path="/discover" component={isLogged ? Discover : Login} />
        <Route exact path="/player" component={FullMusicPlayer} />
        <Route exact path="/hamburger" component={Hamburger} />
        <Route component={NotFound} />
      </Switch>
      {/* </Layout> */}
    </Router>
  );
};

export default App;
