import React from 'react';
import Root from './containers/root';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import configureStore from './store/ConfigureStore';
import { useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })
window.onload = function() {
  injectTapEventPlugin();
  ReactDOM.render(<Root routerHistory={appHistory} store={configureStore()} />, document.getElementById('app'))
}
