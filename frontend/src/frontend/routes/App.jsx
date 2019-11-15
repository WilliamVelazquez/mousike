import React from 'react';
import {
  // BrowserRouter,
  Router,
  Switch,
  Route,
} from 'react-router-dom';
// import Layout from '../components/Layout';
import { createBrowserHistory } from 'history';
import NotFound from '../containers/NotFound';
import Discover from '../containers/Discover';
import FullMusicPlayer from '../components/FullMusicPlayer/FullMusicPlayer';
import Register from '../containers/Register';
import Login from '../containers/Login';
import LoginLayout from '../components/LoginLayout';

const App = () => {
  const history = createBrowserHistory();

  return (
    <Router history={history}>
      {/* behagoras if uncomment the images stop loading */}
      {/* <Layout> */}
      <Switch>
        <Route exact path="/" component={Discover} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/login2" component={LoginLayout} />
        <Route exact path="/discover" component={Discover} />
        <Route exact path="/player" component={FullMusicPlayer} />
        <Route component={NotFound} />
      </Switch>
      {/* </Layout> */}
    </Router>
  );
};

export default App;
