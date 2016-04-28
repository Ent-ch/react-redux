import React from 'react';
import MainLayout from '../layouts/main';
import { Router, Route, IndexRoute } from 'react-router';
import Home from '../components/home/index';
import Sites from '../components/sites/index';
import NotFound from '../components/_shared/not_found';

module.exports =
  <Route path="/" component={MainLayout}>
    <IndexRoute name='Home' component={Home} />
    <Route name="Sites" component={Sites} path="/sites" />
    <Route path="*" component={NotFound} />
  </Route>;
