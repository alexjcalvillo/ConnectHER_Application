import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './SkillsSelector.module.css';
import SearchItems from './skills_selector_components/SearchItems/SearchItems';
import ModalBox from '../ModalBox/ModalBox';
import SelectedSkills from './skills_selector_components/SelectedSkills/SelectedSkills';

const SkillsSelector = () => {
    const [activeTab, setActiveTab] = useState('Leadership');
    const [searchTerm, setSearchTerm] = useState('');
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
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    }
    let searchSkills = skills[activeTab];
    let allSkills = skills && skills.allSkills;
    console.log(skills.allSkills);

    
    // useEffect(() => {
    //     removeSkill();
    // }, []);
    return (
        <div>
            <h1>Hello from the Skills Selector.</h1>
            <div className={styles.container}>
                <div className={styles.main}>
                    <h1 style={{display: 'inline-block'}}>Skills</h1>
                    <ModalBox component={
                        (<><div className={styles.searchBar} >
                        <input
                            type="text" 
                            placeholder="Search for skills"
                            onChange={handleSearch}
                        />
                    </div>
                    <div className={styles.container}>
                        {skills && allSkills && <SearchItems
                            items={allSkills}
                            searchTerm={searchTerm}
                            property="skill"
                        />}
                        <p>Select skills you wish to add. Try searching for a term.</p>
                        <br />
                        <p>Example: "Public Speaking"</p>
                    </div>
                    <SelectedSkills />
                    </>)
                    } />
                </div>
            </div>
        </div>
    )
};

export default SkillsSelector;