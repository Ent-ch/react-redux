import React from 'react';
import Router, { Link, RouteHandler } from "react-router";
import {Row, Col} from 'react-bootstrap';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, ProgressBar, Image, Fade} from "react-bootstrap";
import classNames from "classnames";
import FontAwesome from 'react-fontawesome';
import MenuContainer from '../components/_shared/menu_container';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
    }
  }

  togglePopup = () => {
    this.setState({showPopup:!this.state.showPopup})
  };

  render() {
    return (
      <div id="wrapper" className="content">

        <Navbar style={ { 'marginBottom': '0px' } }>
          <Navbar.Header style={{paddingLeft:'5rem'}}>
            <Navbar.Brand>
              <div className="rubick" onClick={this.togglePopup}>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
              </div>
              <a href="#">Admin</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight className="avatar">
              <Image src="/assets/user.png" circle thumbnail />
            </Nav>
          </Navbar.Collapse>

        </Navbar>

        <div className="navbar-default sidebar" role="navigation">
          <div className="sidebar-nav navbar-collapse">

            <Nav className="nav in" id="side-menu">
              <NavItem eventKey={1} href="#/">
                <FontAwesome name='home' />
                &nbsp; Home
              </NavItem>
              <MenuContainer title='Sites' icon='list' />
              <MenuContainer title='Users' icon='user' />
              <MenuContainer title='Roles' icon='users' />
              <MenuContainer title='Accounts' icon='sliders' createLink="#/accounts/new" modifyLink="#/accounts" />
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
          <div>
            {this.props.children}
          </div>
        </div>
        <div className={this.state.showPopup ? "popup fade-in":"hidden"}>
            This is popup
        </div>

      </div>

    );
  }
}

export default Main;
