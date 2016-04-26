import React from 'react';
import { connect } from 'react-redux';
import * as Actions from '../../actions/home';
import { Grid, Row, Col } from 'react-flexbox-grid/lib/index';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(Actions.setInitialState())
  }



  div() {
    return (
      <div style={{
      position: 'relative',
      boxSizing: 'border-box',
      minHeight: '1rem',
      marginBottom: 0,
      background: '#007fff',
      border: '1px solid #fff',
      bordeRadius: '2px',
      overflow: 'hidden',
      textAlign: 'center',
      color: '#fff',
      }}></div>
    )
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} sm={3} md={2} lg={1}>{this.div()}</Col>
          <Col xs={6} sm={6} md={8} lg={10}>{this.div()}</Col>
          <Col xs={6} sm={3} md={2} lg={1}>{this.div()}</Col>
        </Row>
      </Grid>
    );
  }
}

let mapStateToProps = (state) => {
  return state;
};

module.exports = connect(mapStateToProps)(Home);
