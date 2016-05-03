import React from 'react';
import {Row,Col,FormControl,InputGroup,Table} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import SelectedAccounts from './selected_accounts';

class AccountList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      accounts:[{checked:false},{checked:false},{checked:false},{checked:false}],
      checkAll: false
    };
  }

  checkAll = () => {
    this.setState({checkAll:!this.state.checkAll})
    if (!this.state.checkAll) {
      this.state.accounts.forEach((account,i) => {
        account.checked = true;
      })
    }else{
      this.state.accounts.forEach((account,i) => {
        account.checked = false;
      })
    }
  };

  render() {
    return (
      <Row>
        <h2>Accounts</h2>
        <Row>
          <Col md={3}>
            <FontAwesome name="plus" size='lg' style={{ color: 'green' }} />&nbsp;
            <FontAwesome name="refresh" size='lg'  />&nbsp;|&nbsp;
            <FontAwesome name="trash-o" size='lg' style={{ color: 'red' }} />&nbsp;
            <FontAwesome name="sitemap" size='lg' />&nbsp;
          </Col>
          <Col md={3}>
            <InputGroup>
              <FormControl type="text" placeholder='Search' />
              <InputGroup.Addon><FontAwesome name="search" /></InputGroup.Addon>
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col md={8} >
            <Table responsive>
              <thead>
                <tr>
                  <th><input type="checkbox" checked={this.state.checkAll} onChange={this.checkAll} /></th>
                  <th>Account Name</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.accounts.map((account,i) => {
                    return (
                      <tr key={i}>
                        <td><input type="checkbox" checked={account.checked} /></td>
                        <td>John Snow</td>
                        <td>Active</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </Table>
          </Col>
          <Col md={4}>
            <SelectedAccounts />
          </Col>
        </Row>
      </Row>
    )
  }
}

export default AccountList;