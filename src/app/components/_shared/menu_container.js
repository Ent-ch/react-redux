import React from 'react';
import FontAwesome from 'react-fontawesome';
import { NavItem } from 'react-bootstrap';
import classNames from "classnames";

export default class MenuContainer extends React.Component {
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