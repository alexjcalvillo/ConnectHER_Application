import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './SkillsSelector.module.css';

export const SkillsSelector = (props) => {
    const categories = useSelector(state => state.skillsholder);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: 'GET_CATEGORIES' });
    }, []);
    console.log(typeof categories.leadership);
    return (
        <div className={styles.container}>
            <h1>Hello from the Skills Selector.</h1>
            {/* {categories.leadership.map(skill => {
                return <p>{skill.skill}</p>
            })} */}
        </div>
    )
};