import React from 'react';
import MainLayout from '../layouts/main';
import { Router, Route, IndexRoute } from 'react-router';
import Home from '../components/home/index';
import Accounts from '../components/accounts/list';
import NewAccount from '../components/accounts/new_account';
import NotFound from '../components/_shared/not_found';

module.exports =
  <Route path="/" component={MainLayout}>
    <IndexRoute name='Home' component={Home} />
    <Route name="Accounts" component={Accounts} path="/accounts" />
    <Route name="NewAccount" component={NewAccount} path="/accounts/new" />
    <Route path="*" component={NotFound} />
  </Route>;
