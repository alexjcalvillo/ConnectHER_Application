import React from 'react';

import styles from './SkillPill.module.css';

const SkillPill = ({ skill }) => {
    return (
        <div className={styles.pill}>
            {skill.toUpperCase()}
        </div>
    )
}

export default SkillPill;