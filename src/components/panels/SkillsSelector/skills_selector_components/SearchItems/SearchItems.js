import React, { useState, useEffect } from 'react';
import SkillPill from '../SkillPill/SkillPill';

import styles from './SearchItems.module.css';

const SearchItems = ({ items, searchTerm, property }) => {
    // const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    useEffect(() => {
        // update list rendered based on current state of search
        const results = items.filter(item => {
            return item[property].toLowerCase().includes(searchTerm) ||
            item[property].includes(searchTerm);
        });
        setSearchResults(results);
    }, [searchTerm]);
    return (
        <div className={searchTerm ? styles['search-active'] : styles['search-inactive']}>
            {searchResults.map(item => {
                return <SkillPill key={item.id} skill={item[property]} />
            })}
        </div>
    )
}

export default SearchItems;