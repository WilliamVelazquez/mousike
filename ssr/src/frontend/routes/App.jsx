import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Layout from '../components/Layout';
import NotFound from '../containers/NotFound';
import Discover from '../containers/Discover';

const App = () => (
  <BrowserRouter>
    {/* <Layout> */}
    <Switch>
      <Route exact path="/" component={Discover} />
      <Route exact path="/discover" component={Discover} />
      <Route component={NotFound} />
    </Switch>
    {/* </Layout> */}
  </BrowserRouter>
);

export default App;
