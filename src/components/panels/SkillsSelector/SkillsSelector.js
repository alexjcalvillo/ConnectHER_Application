import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './SkillsSelector.module.css';
import CategoryPanel from './skills_selector_components/CategoryPanel';

const SkillsSelector = () => {
    const categories = useSelector(state => state.skillCategories);
    const skills = useSelector(state => state.skillsholder);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: 'GET_CATEGORIES' });
        dispatch({ type: 'GET_SKILLS' });
    }, []);
    console.log(categories.length);
    console.log(categories.map(category => category.name));
    console.log(skills);
    return (
        <div className={styles.container}>
            <h1>Hello from the Skills Selector.</h1>
            {categories.map(category => {
                return<CategoryPanel key={category.id} category={category.name} skills={skills[category.name]} />
            })}
        </div>
    )
};

export default SkillsSelector;