import React from 'react';
import { connect } from 'react-redux';
import {Row, Col} from 'react-bootstrap';
// import * as Actions from '../../actions/index';

class Sites extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Row>
          <h1 style={{textAlign:'center'}}>Sites</h1>
        </Row>
    );
  }
}

let mapStateToProps = (state) => {
  return state;
};

module.exports = connect(mapStateToProps)(Sites);
