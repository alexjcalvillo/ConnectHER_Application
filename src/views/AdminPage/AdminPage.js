import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Pie } from 'react-chartjs-2';
import ProfileSearch from '../../components/ProfileSearch/ProfileSearch';
import { Button, Row, Col } from 'reactstrap';
import AdminSearch from '../../components/AdminSearch/AdminSearch';

import AdminCharts from '../../components/Admin/AdminCharts';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.

class AdminPage extends Component {
  state = {
    heading: 'Admin Page',
    searchTerm: 'job_title',
    rSelected: 1,
  };

  componentDidMount() {
    this.props.dispatch({
      type: 'FETCH_ALL_PROFILES',
    });
  }

  handleClick = (key) => {
    this.props.history.push({
      pathname: 'admin-overview',
      state: {
        graphClicked: key,
      },
    });
  };

  getState = () => {
    return this.state;
  };

  render() {
    const methods = {
      handleClick: this.handleClick,
      getState: this.getState,
    };

    if (this.props.store.user.access_level != 2) {
      return (
        <h2 style={{ topMargin: 75, fontSize: 'vw', textAlign: 'center' }}>
          You are not authorized to view this area.
        </h2>
      );
    } else {
      if (this.props.store.user.access_level === null) {
        return <h2>Please Login to View this Page</h2>;
      } else {
        if (this.props.store.user.access_level == 2) {
          return (
            <div>
              <h2>{this.state.heading}</h2>
              <AdminCharts methods={methods} />
              <Row className="mt-3">
                <Col>
                  <AdminSearch
                    skills={this.props.store.memberListingsReducer}
                    term={this.state.searchTerm}
                  />
                </Col>
              </Row>
            </div>
          );
        }
      }
    }
  }
}

export default connect(mapStoreToProps)(AdminPage);
