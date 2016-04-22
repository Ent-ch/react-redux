import React from 'react';
import { Router, RoutingContext } from 'react-router';
import { Provider } from 'react-redux';
import routes from '../routes/index';

export default class Root extends React.Component {

  constructor(props) {
    super(props);
  }

  renderRouter() {
    if (this.props.routingContext) {
      return (<RoutingContext {...this.props.routingContext} />)
    } else {
      return (
        <Router history={this.props.routerHistory}>
          {routes}
        </Router>
      )
    }
  }

  render() {
    return (
      <div>
        <Provider store={this.props.store}>
          {this.renderRouter()}
        </Provider>
      </div>
    )
  }
}
