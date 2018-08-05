import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import ActionSave from 'material-ui/svg-icons/content/send';
import IconButton from 'material-ui/IconButton';
import AppBar from 'material-ui/AppBar';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';

class MaterialSample extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  menuItemClicked = () => this.setState({ open: !this.state.open });
  menuClicked = () => this.setState({ open: !this.state.open });

  render() {
    return (
      <div>
        <AppBar
          title="Title"
          onLeftIconButtonClick={this.menuClicked}
          iconElementRight={<IconButton> <ActionSave /> </IconButton>}
        />

        <Drawer open={this.state.open}>
          <Card>
            <CardHeader
              title="Punith"
              subtitle="Engineer"
              avatar="http://via.placeholder.com/50x50"
            />
            <CardMedia
              overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}>
              <img src="http://via.placeholder.com/600x350" alt="No-image" className='img-plave' />
            </CardMedia>
          </Card>
          <MenuItem onClick={this.menuItemClicked}>Menu Item</MenuItem>
          <MenuItem onClick={this.menuItemClicked}>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default MaterialSample;