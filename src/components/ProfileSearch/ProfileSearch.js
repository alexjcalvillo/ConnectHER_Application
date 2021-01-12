import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import { Row, Col, Input } from 'reactstrap';

import ProfileResults from '../ProfileResults/ProfileResults';
import SkillsSelector from '../SkillsSelector/SkillsSelector';

// creating a Search functional component to reuse in search page and for skills
function ProfileOptions({ term, skills }) {
  // Using hooks we're creating local state for a search Term and a search Result
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // useEffect hook dependent upon skills, searchTerm props
  // will update each time the search input changes and the
  // results filters values that include any version of the searchTerm
  useEffect(() => {
    let search = term;
    let list = skills;
    console.log(list);
    if (search === 'skills') {
      let results = list.filter((v) =>
        v.skills.some(
          (skill) =>
            skill.skill.includes(searchTerm) ||
            skill.skill.toLowerCase().includes(searchTerm)
        )
      );
      setSearchResults(results);
      // console.log(results);
    } else {
      const results = list.filter(
        (skill) =>
          skill[search].toLowerCase().includes(searchTerm) ||
          skill[search].includes(searchTerm)
      );
      setSearchResults(results);
      // console.log(results);
    }
  }, [skills, term, searchTerm]);
  return (
    <div>
      <Row>
        <Col
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
          lg={{ size: 10, offset: 1 }}
          md={{ size: 10, offset: 1 }}
        >
          <Input
            style={{ width: '100%', margin: '5px 0 10px 0px' }}
            className="form-control-alternative"
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleChange}
          />
          <SkillsSelector />
        </Col>
      </Row>
      <Row>
        <Col>
          <ProfileResults results={searchResults} />
        </Col>
      </Row>
    </div>
  );
}

export default connect(mapStoreToProps)(ProfileOptions);
