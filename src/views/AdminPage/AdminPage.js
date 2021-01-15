import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Pie } from 'react-chartjs-2';
import ProfileSearch from '../../components/ProfileSearch/ProfileSearch';
import { Button, Row, Col, Card } from 'reactstrap';
import AdminSearch from '../../components/AdminSearch/AdminSearch';
import AdminMembership from '../../components/MembershipOptions/AdminMembershipOptions';

import './AdminPage.css';

import AdminCharts from '../../components/Admin/AdminCharts';
import MemberManager from '../../components/Admin/MemberManagement/Mentor_Mentee';
import MentorMentee from '../../components/Mentor_Mentee/Mentor_Mentee';

import { transformAuthInfo } from 'passport';

import function_list from '../../functions/list';
import Member from '../../components/Admin/MemberManagement/Member';

let results = 0;

class AdminPage extends Component {
  state = {
    searchTerm: 'display_name',
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

  handleAdmin = (event) => {
    event.preventDefault();
    this.props.history.push('/admin-overview');
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
              <Row>
                <Card className="welcomeBanner1">
                  <h2
                    style={{
                      marginTop: '10px',
                      fontFamily: 'cabin',
                      fontSize: '60px',
                      textAlign: 'center',
                      color: '#ECECEC',
                    }}
                  >
                    Admin Dashboard
                  </h2>
                </Card>
              </Row>
              <Row>
                <Col className="graph" lg={12} md={12} s={12} xs={12}>
                  <div style={{ textAlign: 'center', marginTop: '-70px' }}>
                    <div
                      className="chart_category"
                      style={{ marginTop: -40, width: '100%' }}
                    >
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
                  </div>
                  <AdminCharts className="charts" methods={methods} />
                  <p
                    className="adminChartResultsTest"
                    style={{
                      fontSize: 15,
                      fontFamily: 'lato',
                      color: '#111111d0',
                    }}
                  >
                    This chart generated from a total of {results} user results!
                  </p>
                </Col>
              </Row>
              <Row>
                {' '}
                <Col
                  className="pie"
                  style={{ marginTop: 12 }}
                  lg={{ size: 12 }}
                  md={12}
                  s={12}
                  xs={12}
                >
                  <AdminMembership />
                </Col>
              </Row>
              <Row>
                <Col lg={{ size: 10, offset: 1 }} md={4} s={12} xs={12}>
                  <Member />
                </Col>
              </Row>
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
