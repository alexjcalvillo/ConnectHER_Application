import { connect } from 'react-redux';

import { useFormik } from 'formik';
import Swal from 'sweetalert2';

import React, { Component } from 'react';

class CareerForm extends Component {
  state = {
    selected: [],
    multi_label: 'Checkboxes',
  };
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_CATEGORIES',
    });
  }

  handleSubmit = (event) => {
    this.props.dispatch({
      type: 'POST_MULTIDATA',
      payload: {
        label: this.state.multi_label,
        selected: this.state.selected,
      },
    });
    alert('made it');
    this.setState({
      selected: [],
      multi_label: 'Mui Checkboxes',
    });
  };

  handleChangeFor = (event, stateKey) => {
    let newValue = event.target.value;
    const isSelected = event.target.checked;

    if (event.target.type === 'checkbox' && isSelected === true) {
      // is not already selected so adding it to selected
      newValue = [...this.state[stateKey], parseInt(event.target.value)];
    } else if (event.target.type === 'checkbox' && isSelected === false) {
      // is already selected so now we need to remove it from selected
      newValue = this.state[stateKey].filter((selectedItem) => {
        return selectedItem !== parseInt(event.target.value);
      });
    }

    this.setState({
      [stateKey]: newValue,
    });
  };

  render() {
    const names = [
      'Oliver Hansen',
      'Van Henry',
      'April Tucker',
      'Ralph Hubbard',
      'Omar Alexander',
      'Carlos Abbott',
      'Miriam Wagner',
      'Bradley Wilkerson',
      'Virginia Andrews',
      'Kelly Snyder',
    ];
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Please Select All That Apply</h2>
        <div></div>
        <button>Save</button>
      </form>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(CareerForm);
