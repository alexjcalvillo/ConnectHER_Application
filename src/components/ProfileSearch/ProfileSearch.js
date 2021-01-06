import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import { Row, Col, Input } from 'reactstrap';

import ProfileResults from '../ProfileResults/ProfileResults';

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
    const results = list.filter(
      (skill) =>
        skill[search].toLowerCase().includes(searchTerm) ||
        skill[search].includes(searchTerm)
    );

    setSearchResults(results);
  }, [skills, term, searchTerm]);
  return (
    <div>
      <Row>
        <Col>
          <Input
            className="form-control-alternative"
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleChange}
          />
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
