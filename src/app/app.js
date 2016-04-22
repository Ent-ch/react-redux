import React from 'react';
import Root from './containers/root';
import ReactDOM from 'react-dom';
import { hashHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import configureStore from './store/ConfigureStore';

window.onload = function() {
  injectTapEventPlugin();
  ReactDOM.render(<Root routerHistory={hashHistory} store={configureStore()} />, document.getElementById('app'))
}
