import React from 'react';
import Dialog from 'material-ui/Dialog';
import {deepOrange500, cyan500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';

import { SocialPerson, SocialPeople, ActionHome, ActionList, ImageTune } from 'material-ui/svg-icons';

import {List, ListItem, MakeSelectable} from 'material-ui/List';
const SelectableList = MakeSelectable(List);

lightBaseTheme.appBar = {
    height: 50,
  };


const drawerWidth = 320,
      appTitle = '';

const muiTheme = getMuiTheme(lightBaseTheme);

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleBar: true,
    }
    // this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle = () => {
    this.setState({visibleBar: !this.state.visibleBar});
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div s>
          <AppBar title="My App" onLeftIconButtonTouchTap={this.handleToggle} />
          <Drawer width={drawerWidth} open={this.state.visibleBar} >
            <AppBar title="My App" onLeftIconButtonTouchTap={this.handleToggle} />

            <ListItem primaryText="Home" leftIcon={<ActionHome />} />

            <ListItem primaryText="Users" leftIcon={<SocialPerson />}
              primaryTogglesNestedList={true}
              nestedItems={[
                <ListItem primaryText="Create" value="/get" />,
                <ListItem primaryText="Modify" value="/get" />,
              ]}
            />
            <ListItem primaryText="Roles" leftIcon={<SocialPeople />}
              primaryTogglesNestedList={true}
              nestedItems={[
                <ListItem primaryText="Create" value="/get" />,
                <ListItem primaryText="Modify" value="/get" />,
              ]}
            />
            <ListItem primaryText="Account" leftIcon={<ImageTune />}
              primaryTogglesNestedList={false}
              nestedItems={[
                <ListItem primaryText="Modify" value="/get" />,
              ]}
            />

          </Drawer>
        </div>
      </MuiThemeProvider>


    );
  }
}

export default Main;
