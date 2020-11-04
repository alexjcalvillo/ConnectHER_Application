import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './SkillsSelector.module.css';
import CategoryPanel from './skills_selector_components/CategoryPanel';
import SearchOption from '../../helpers/SearchOption/SearchOption'

const SkillsSelector = () => {
    const [activeTab, setActiveTab] = useState('Leadership');
    const categories = useSelector(state => state.skillCategories);
    const skills = useSelector(state => state.skillsholder);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: 'GET_CATEGORIES' });
        dispatch({ type: 'GET_SKILLS' });
    }, []);
    function getActiveTab(category) {
        setActiveTab(category.name);
    };
    return (
        <div>
            <h1>Hello from the Skills Selector.</h1>
            <div className={styles.container}>
                <div className={styles.sidebar}>
                    {categories.map(category => {
                        return<CategoryPanel
                                key={category.id}
                                category={category.name}
                                skills={skills[category.name]}
                                getActiveTab={() => getActiveTab(category)}
                                activeTab={activeTab}
                              />
                    })}
                </div>
                <div className={styles.main}>
                    {/* <SearchOption
                    /> */}
                </div>
            </div>
        </div>
    )
};

export default SkillsSelector;