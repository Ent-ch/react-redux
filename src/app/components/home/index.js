import React from 'react';
import { connect } from 'react-redux';
import * as Actions from '../../actions/home';
import { Grid, Row, Col } from 'react-bootstrap';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(Actions.setInitialState())
  }

  render() {
    const [xsSize, smSize, mdSize, lgSize] = [12, 6, 6, 6];
    return (
      <div>
        <Row>
          <Col xs={xsSize} sm={smSize} md={mdSize} lg={lgSize}>
            <h2><a href="#/">Home</a></h2>
          </Col>
        </Row>
        <Row>
          <Col xs={xsSize} sm={smSize} md={mdSize} lg={lgSize}>
            <h2><a href="#/users">Users</a></h2>
            <a href="#/users/create">Create User</a><br/>
            <a href="#/users/:id/edit">Modify User</a>
          </Col>
          <Col xs={xsSize} sm={smSize} md={mdSize} lg={lgSize}>
            <h2><a href="#/sites">Sites</a></h2>
            <a href="#/sites/create">Create Site</a><br/>
            <a href="#/sites/:id/edit">Modify Site</a>
          </Col>
        </Row><br/><br/>
        <Row>
          <Col xs={xsSize} sm={smSize} md={mdSize} lg={lgSize}>
            <h2><a href="#/roles">Roles</a></h2>
            <a href="#/roles/create">Create Role</a><br/>
            <a href="#/roles/:id/edit">Modify Role</a>
          </Col>
          <Col xs={xsSize} sm={smSize} md={mdSize} lg={lgSize}>
            <h2><a href="#/accounts">Accounts</a></h2>
            <a href="#/accounts/new">Create Account</a><br/>
            <a href="#/accounts/:id">Modify Account</a>
          </Col>
        </Row><br/><br/>
        <Row>
          <Col xs={xsSize} sm={smSize} md={mdSize} lg={lgSize}>
            <h2><a href="#/permissions">Permissions</a></h2>
            <a href="#/permissions/create">Create Permission</a><br/>
            <a href="#/permissions/:id/edit">Modify Permission</a>
          </Col>
          <Col xs={xsSize} sm={smSize} md={mdSize} lg={lgSize}>
            <h2><a href="#/global_options">Global Options</a></h2>
            <a href="#/global_options/create">Create Global Options</a><br/>
            <a href="#/global_options/:id/edit">Modify Global Options</a>
          </Col>
        </Row>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return state;
};

module.exports = connect(mapStateToProps)(Home);
