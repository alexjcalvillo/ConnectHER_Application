import React, {useEffect, useState, useRef } from 'react';
import styles from './ModalBox.module.css';

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