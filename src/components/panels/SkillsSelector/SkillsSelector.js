import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './SkillsSelector.module.css';
import CategoryPanel from './skills_selector_components/CategoryPanel/CategoryPanel';
import SearchOption from '../../helpers/SearchOption/SearchOption'
import SearchItems from './skills_selector_components/SearchItems/SearchItems';
import ModalBox from '../ModalBox/ModalBox';

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
    return (
        <div>
            <h1>Hello from the Skills Selector.</h1>
            <div className={styles.container}>
                <ModalBox
                    component={(
                <>
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
                    </>)} 
                />
            </div>
            <div className={styles.container}>
                <div className={styles.main}>
                    {/* <div className={styles.searchBar} >
                        <input
                            type="text" 
                            placeholder="Search for skills"
                            onChange={handleSearch}
                            defaultValue="li"
                        />
                    </div>
                    <div className={styles.container}>
                        {skills && allSkills && <SearchItems 
                            items={allSkills}
                            searchTerm={searchTerm}
                            property="skill"
                        />}
                        Select skills you wish to add. Try searching for a term.
                    </div> */}
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
                        Select skills you wish to add. Try searching for a term.
                        <br />
                        Example: "Public Speaking"
                    </div></>)
                    } />
                </div>
            </div>
        </div>
    )
};

export default SkillsSelector;