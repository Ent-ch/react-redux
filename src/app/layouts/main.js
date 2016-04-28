import React from 'react';
import Router, { Link, RouteHandler } from "react-router";

import {Navbar, Nav, NavItem, NavDropdown, MenuItem, ProgressBar} from "react-bootstrap";
import classNames from "classnames";
import FontAwesome from 'react-fontawesome';


class MenuContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uiElementsCollapsed: true,
    }
  }

  render() {
    return (
      <li className={classNames({'active': !this.state.uiElementsCollapsed})}>
        <a href="javascript:void(0)" onClick={ () => { this.setState({uiElementsCollapsed: !this.state.uiElementsCollapsed}); return false; } }>
          <FontAwesome name={this.props.icon} />
            &nbsp; {this.props.title}
          <span className="fa arrow"></span>
        </a>
        <ul className={classNames({'nav nav-second-level': true, 'collapse': this.state.uiElementsCollapsed})}>
          <NavItem eventKey={1} href={this.props.createLink}>Create</NavItem>
          <NavItem eventKey={1} href={this.props.modifyLink}>Modify</NavItem>
        </ul>
      </li>
    )
  }
}

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleBar: true,
    }
  }

  handleToggle = () => {
    this.setState({visibleBar: !this.state.visibleBar});
  }

  render() {
    return (
      <div id="wrapper" className="content">

        <Navbar style={ {margin: 0} }>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Admin</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>

        <div className="navbar-default sidebar" style={ { 'marginTop': '20px' } } role="navigation">
          <div className="sidebar-nav navbar-collapse">

            <Nav className="nav in" id="side-menu">
              <NavItem eventKey={1} href="#/">
                <FontAwesome name='home' />
                &nbsp; Home
              </NavItem>
              <MenuContainer title='Sites' icon='list' />
              <MenuContainer title='Users' icon='user' />
              <MenuContainer title='Roles' icon='users' />
              <MenuContainer title='Accounts' icon='sliders' />
              <NavItem eventKey={1} href="#/sites">
                <FontAwesome name='wrench' />
                &nbsp; Global Options
              </NavItem>
              <NavItem eventKey={1} href="#/">
                <FontAwesome name='key' />
                &nbsp; Permissions
              </NavItem>

            </Nav>

          </div>
        </div>
        <div id="page-wrapper" className="page-wrapper" ref="pageWrapper" style={{minHeight: this.state.Height}}>
          Content
          {this.props.children}
        </div>

      </div>

    );
  }
}

export default Main;
