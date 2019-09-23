import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn}></Route>
      <Route path="/register" component={SignUp}></Route>
      <Route path="/dashboard" component={Dashboard}></Route>
      <Route path="/profile" component={Profile}></Route>
    </Switch>
  );
}
