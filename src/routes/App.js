import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Home from '../containers/Home';
// import Login from '../containers/Login';
// import Register from '../containers/Register';
// import NotFound from '../containers/NotFound';
// import Layout from '../components/Layout';
// import Player from '../containers/Player';
import Discover from '../containers/Discover';
import HamburgerMenu from '../components/HamburgerMenu';
import GlobalStyle from '../GlobalStyles';
// import MusicPlayer from '../components/MusicPlayer';

const App = () => (
  <BrowserRouter>

    {/* <Layout> */}
    <Switch>
      {/* <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} /> */}
      <Route exact path='/discover' component={Discover} />
      <Route exact path='/hamburger' component={HamburgerMenu} />
      {/* <Route exact path='/player/:id' component={Player} />
        <Route exact path='/musicplayer/' component={MusicPlayer} />
        <Route component={NotFound} /> */}
    </Switch>
    {/* </Layout> */}
  </BrowserRouter>
);

export default App;
