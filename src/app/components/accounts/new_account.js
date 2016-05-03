import React from 'react';
import {
  Row,
  FormGroup,
  FormControl,
  Col,
  Checkbox,
  Image,
  Button
} from 'react-bootstrap';
import Dropzone from 'react-dropzone';

export default class NewAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onDrop = (files) => {
    this.setState({
      files: files
    })
  };

  _renderColorPicker(label,name) {
    return (
      <Row>
        <FormGroup>
          <Col xs={12} md={10}>
            <div style={{borderBottom:'1px solid #ccc',paddingBottom:'1rem'}}>{label}</div>
          </Col>
          <Col xs={12} md={2}>
            <FormControl type="color" name={name} />
          </Col>
        </FormGroup>
      </Row>
    )
  }

  render() {
    return (
      <Row>
        <h2>Create Account</h2>
        <hr/>
        <Col xs={12} md={6}>
          <Row>
            <FormGroup>
              <Col xs={8} md={8}>
                <FormControl type="text" placeholder="Account Name" />
              </Col>
              <Col xs={4} md={4}>
                <Checkbox>Active</Checkbox>
              </Col>
            </FormGroup>
          </Row>
          <br/>
          <Row>
            <FormGroup>
              <Col xs={6} md={6}>
                {
                  this.state.files ? <div>
                    <div>{
                      this.state.files.map((file,i) => {
                        return <Image key={i} src={file.preview} circle responsive />
                      })
                    }</div>
                  </div> : <div><Image src="http://www.pcospal.com/wp-content/themes/qaengine/img/default-thumbnail.jpg" circle responsive /></div>
                }
              </Col>
              <Col xs={6} md={6}>
                <Dropzone  onDrop={this.onDrop} multiple={false}>
                  <div style={{textAlign:'center',alignItems:'middle'}}>Try dropping some files here, or click to select file to upload.</div>
                </Dropzone>
              </Col>
            </FormGroup>
          </Row>
          <br/>
          {this._renderColorPicker('Header color','headerColor')}
          <br/>
          {this._renderColorPicker('Title color','titleColor')}
          <br/>
          {this._renderColorPicker('Menu Links color','menuLinksColor')}
          <br/>
          {this._renderColorPicker('Menu background color','menuBackgroundColor')}
          <br/>
          {this._renderColorPicker('Background Users Roles color','backgroundUsersRolesColor')}
          <br/>
          <Row>
            <Col md={6}>
              <Button bsSize="large" bsStyle="primary" block>Create</Button>
            </Col>
            <Col md={6}>
              <Button bsSize="large" bsStyle="danger" block>Cancel</Button>
            </Col>
          </Row>
          <br/>
        </Col>
        <h2>Admins:</h2>
        <Col xs={12} md={6}>
          <FormControl componentClass="select" size={30} multiple>
            <option value="select">Admin 1</option>
            <option value="select">Admin 2</option>
            <option value="select">Admin 3</option>
            <option value="other">...</option>
          </FormControl>
          <br/>
          <Button bsSize="large" bsStyle="default">Assign Account Admin</Button>
        </Col>
      </Row>
    )
  }
}