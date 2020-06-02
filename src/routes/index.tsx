import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Reader from '../pages/Reader';
import Register from '../pages/Register';
import RegisterMulti from '../pages/RegisterMulti';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/reader" component={Reader} />
    <Route path="/register" component={Register} />
    <Route path="/multi" component={RegisterMulti} />
  </Switch>
);

export default Routes;
