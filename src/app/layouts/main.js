import React from 'react';
import Router, { Link, RouteHandler } from "react-router";
import {Row, Col} from 'react-bootstrap';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, ProgressBar} from "react-bootstrap";
import $ from "jquery";
import classNames from "classnames";



class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false
    }
  }

  handleTogglePopup = () => {
    this.setState({showPopup: !this.state.showPopup});
  }

  render() {
    return (
      <div id="wrapper" className="content">

        <Navbar>
          <Navbar.Header style={{paddingLeft:'5rem'}}>
            <Navbar.Brand>
              <div className="rubick" onClick={this.handleTogglePopup}>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
              </div>
              <a href="#">Admin</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>

        <div className={this.state.showPopup ? "popup":"hidden"}>
            This is popup
        </div>

        <Col mdOffset={2} md={10} lg={10}>
          {this.props.children}
        </Col>

      </div>

    );
  }
}

export default Main;
