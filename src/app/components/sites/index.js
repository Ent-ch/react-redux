import React from 'react';
import { connect } from 'react-redux';
// import * as Actions from '../../actions/index';

class Sites extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1 style={{textAlign:'center'}}>Sites</h1>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return state;
};

module.exports = connect(mapStateToProps)(Sites);
