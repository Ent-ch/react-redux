import React from 'react';
import Router, { Link, RouteHandler } from "react-router";
import {Row, Col} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import {Navbar, Checkbox, FormGroup, Button} from "react-bootstrap";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
    }
  }

  render() {
    return (
      <div>

        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              Logo
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>

        <Row>
          <Col xs={10} xsOffset={1} sm={6} smOffset={3} >
            <form role='form'>
              <FormGroup>
                <input type='text'
                  className='form-control'
                  placeholder='Email' />
              </FormGroup>
              <FormGroup>
                <input type='password'
                  className='form-control'
                  placeholder='Password' />
              </FormGroup>
              <FormGroup>
                <Checkbox inline>
                  Remember me
                </Checkbox>
                <Button type='submit' style={{'float': 'right'}}>
                  Sign in
                </Button>
              </FormGroup>
            </form>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Main;
