import React, { Component } from 'react';
import './post-status-filter.css'

export default class PostStatusFilter extends Component {
    constructor(props) {
        super(props);
        this.buttons = [
            {name: 'all', 'label': 'All'},
            {name: 'like', 'label': 'Liked'}
        ]
    }
    render() {
        const buttons = this.buttons.map(({name, label}) => {
            const {filter, onFilterSelect} = this.props;
            const isActiveButton = filter === name;
            const clazz = isActiveButton ? 'btn-info' : 'btn-outline-secondary'
            return (
            <button 
                key={name} 
                type='button' 
                className={`btn ${clazz}`}
                onClick={() => onFilterSelect(name)} 
            >{label}</button>
            )
        });
        return (
            <div className='btn-group'>
                {buttons}
            </div>
        );
    }
    
}

