import React, { useState } from 'react';
import styles from './ModalBox.module.css';

import { Button } from 'reactstrap';

import style_list from '../../styles/list';
import function_list from '../../functions/list'; // custom functions object

// This is a custom made modal box with that requires a button to close.
// Needs to be refactor to be more flexible as it currently is for skills specifically
const ModalBox = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={isOpen ? styles.modalContainer : null}>
      <Button
        style={{
          ...style_list.register.button,

          float: 'right',
          marginTop: -50,
          marginRight: 10,
        }}
        outline
        color="primary"
        onClick={() => setIsOpen(!isOpen)}
      >
        Add
      </Button>
      {isOpen ? (
        <div>
          <div className={styles.modal}>
            <button onClick={() => setIsOpen(!isOpen)}>X</button>
            {props.component}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ModalBox;
