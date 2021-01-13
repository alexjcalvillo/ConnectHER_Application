import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Pie } from 'react-chartjs-2';
import ProfileSearch from '../../components/ProfileSearch/ProfileSearch';
import { Button, Row, Col } from 'reactstrap';
import AdminSearch from '../../components/AdminSearch/AdminSearch';

import function_list from '../../functions/list';
// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.

class AdminPage extends Component {
  render() {
    const method = this.props.methods;
    return (
      <>
        <Pie
          onElementsClick={() => {
            method.handleClick('age');
          }}
          onClick={this.handleAgeClick}
          data={function_list.adminChartData({
            type: 'age',
            reducer: this.props.store.demographicReducer.age,
            call: 'data',
          })}
          height={50}
          options={function_list.adminChartData({ type: 'Age' })}
        />
        <Pie
          onElementsClick={() => {
            method.handleClick('ethnicity');
          }}
          data={function_list.adminChartData({
            type: 'ethnicity',
            reducer: this.props.store.demographicReducer.ethnicity,
            call: 'data',
          })}
          height={50}
          options={function_list.adminChartData({ type: 'Ethnicity' })}
        />
        <Pie
          onElementsClick={() => {
            method.handleClick('gender');
          }}
          data={function_list.adminChartData({
            type: 'genderId',
            reducer: this.props.store.demographicReducer.gender,
            call: 'data',
          })}
          height={50}
          options={function_list.adminChartData({ type: 'Gender Identity' })}
        />
        <Pie
          onElementsClick={() => {
            method.handleClick('sex');
          }}
          data={function_list.adminChartData({
            type: 'sexO',
            reducer: this.props.store.demographicReducer.sexualOrientation,
            call: 'data',
          })}
          height={50}
          options={function_list.adminChartData({ type: 'Sexual Orientation' })}
        />
      </>
    );
  }
}

export default connect(mapStoreToProps)(AdminPage);
