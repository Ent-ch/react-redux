import React from 'react';
import Router, { Link, RouteHandler } from "react-router";

import {Navbar, Nav, NavItem, NavDropdown, MenuItem, ProgressBar} from "react-bootstrap";
import $ from "jquery";
import classNames from "classnames";



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

        <div id="page-wrapper" className="page-wrapper" ref="pageWrapper" style={{minHeight: this.state.Height}}>
          Content
        </div>

      </div>

    );
  }
}

export default Main;
