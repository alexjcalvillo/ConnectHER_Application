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
        dispatch({ type: 'GET_ALL_SKILLS' });
    }, []);
    function getActiveTab(category) {
        setActiveTab(category.name);
    };
    let searchSkills = skills[activeTab];
    let allSkills = skills.allSkills;
    console.log(skills.allSkills);
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
                    {skills && searchSkills && 
                        <SearchOption
                        skills={searchSkills}
                        />
                    }
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.main}>
                    {skills && allSkills && 
                        <SearchOption 
                            skills={skills.allSkills}
                        />
                    }
                    Hello
                </div>
            </div>
        </div>
    )
};

export default SkillsSelector;