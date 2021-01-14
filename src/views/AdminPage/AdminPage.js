import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Pie } from 'react-chartjs-2';
import ProfileSearch from '../../components/ProfileSearch/ProfileSearch';
import { Button, Row, Col } from 'reactstrap';
import AdminSearch from '../../components/AdminSearch/AdminSearch';

import AdminCharts from '../../components/Admin/AdminCharts';
import MemberManager from '../../components/Admin/MemberManagement/Mentor_Mentee';
import { transformAuthInfo } from 'passport';

import function_list from '../../functions/list';

let results = 0;

class AdminPage extends Component {
  state = {
    searchTerm: 'job_title',
    rSelected: 1,
    title: 'Age',
    titleNum: 1,
  };

  componentDidMount() {
    let lastResultsCheck = 0;
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

  setTitle = (title) => {
    this.setState({
      ...this.state,
      title: title,
    });
  };

  handleResults = (resultsFromGraph) => {
    results = resultsFromGraph;
  };

  rotateTitle = (movement) => {
    const newState = function_list.getNextGraph(movement, this.state);
    this.setState({
      ...this.state,
      ...newState,
    });
  };
  render() {
    const methods = {
      handleClick: this.handleClick,
      getState: this.getState,
      setTitle: (title) => {
        this.setTitle(title);
      },
      handleResults: (results) => {
        this.handleResults(results);
      },
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
            <div style={{ marginTop: '-50px' }}>
              <h2>Admin Page</h2>
              <div style={{ textAlign: 'center' }}>
                <div
                  className="adminButtonLeft"
                  onClick={() => {
                    this.rotateTitle('left');
                  }}
                >
                  <i class="fa fa-arrow-left adminButtonLeftImg"></i>
                </div>
                <h1 className="chartBoxTitle">
                  {this.state.title || 'loading...'}
                </h1>
                <div
                  className="adminButtonRight"
                  onClick={() => {
                    this.rotateTitle('right');
                  }}
                >
                  <i class="fa fa-arrow-right adminButtonRightImg"></i>
                </div>
              </div>
              <AdminCharts methods={methods} />
              <p className="adminChartResultsTest">
                This chart generated from a total of {results} user results!
              </p>
              <MemberManager methods={methods} />
              {/* <Row className="mt-3">
                <Col>
                  <AdminSearch
                    skills={this.props.store.memberListingsReducer}
                    term={this.state.searchTerm}
                  />
                </Col>
              </Row> */}
            </div>
          );
        }
      }
    }
  }
}

export default connect(mapStoreToProps)(AdminPage);
