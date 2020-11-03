import React, { Component } from 'react';

class CategoryPanel extends Component {
    render() {
        const { category, skills } = this.props;
        return (
            <>
                <div>
                    <h1>{this.props.category}</h1>
                </div>
                <div>
                    {this.props && skills && skills.map(skill => skill.skill)}
                </div>
            </>
        )
    }
}

export default CategoryPanel;