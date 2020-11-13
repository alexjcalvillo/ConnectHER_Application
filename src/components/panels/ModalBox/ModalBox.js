import React, {useEffect, useState, useRef } from 'react';
import styles from './ModalBox.module.css';

const ModalBox = (props) => {
    const outside = useRef();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const getClick = document.addEventListener('click', handleClick);

        return () => {
            getClick();
        }
    }, []);

    const handleClick = (event) => {
        if (outside.current.contains(event.target)) {
            return;
        } else {
            setIsOpen(false);
        }
    }
    return (
        <div className={isOpen ? styles.modalContainer : null}>
            <div ref={outside}>
            <button onClick={() => setIsOpen(!isOpen)}>Toggle Modal</button>
                {isOpen ? (
                    <div>
                        <div className={styles.modal}>
                            {props.component}
                        </div>
                    </div>
                ) :
                null}
            </div>
        </div>
    )
}

export default ModalBox;