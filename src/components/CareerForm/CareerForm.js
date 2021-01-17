import { connect } from 'react-redux';
import style_list from '../../styles/list';
import { Button } from 'reactstrap';

import { useFormik } from 'formik';
import Swal from 'sweetalert2';

import React, { Component } from 'react';

class CareerForm extends Component {
  state = {
    user_id: this.props.store.user.id,
    selected: [],
    multi_label: 'Checkboxes',
  };
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_CAREER_LEVELS',
    });
  }

  handleSubmit = (event) => {
    this.props.dispatch({
      type: 'POST_USER_CAREER',
      payload: {
        user_id: this.props.store.user.id,
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
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Please Select All That Apply</h2>
        <div>
          {this.props.store.careerLevel.map((item, index) => {
            return (
              <label>
                <input
                  type="checkbox"
                  checked={this.state.selected.indexOf(item.id) !== -1}
                  value={item.id}
                  onChange={(event) => this.handleChangeFor(event, 'selected')}
                />
                <span>{item.name}</span>
              </label>
            );
          })}
        </div>
        <Button
          // style={style_list.register.button}
          style={{ ...style_list.register.button }}
        >
          Save
        </Button>
      </form>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(CareerForm);
