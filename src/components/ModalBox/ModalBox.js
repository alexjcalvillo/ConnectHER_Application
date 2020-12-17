import React, { useState } from 'react';
import styles from './ModalBox.module.css';

// This is a custom made modal box with that requires a button to close.
// Needs to be refactor to be more flexible as it currently is for skills specifically
const ModalBox = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={isOpen ? styles.modalContainer : null}>
            <button onClick={() => setIsOpen(!isOpen)}>Add Skills</button>
                {isOpen ? (
                    <div>
                        <div className={styles.modal}>
                            <button onClick={() => setIsOpen(!isOpen)}>X</button>
                            {props.component}
                        </div>
                    </div>
                ) :
                null}
            </div>
    )
}

export default ModalBox;