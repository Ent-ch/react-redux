import React from 'react';
import { connect } from 'react-redux';
import * as Actions from '../../actions/home';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(Actions.setInitialState())
  }

  render() {
    return (
      <div>
        <h1 style={{textAlign:'center'}}>Home</h1>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return state;
};

module.exports = connect(mapStateToProps)(Home);
