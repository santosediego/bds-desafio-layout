import React from 'react';
import './styles.css';

function Search() {
    return (
        <div className="search-container">
            <div className="search-input">
                <input type="search" placeholder='Digite sua busca'/>
            </div>
            <div className="bg bg-primary search-button">
                <button>buscar</button>
            </div>
        </div>
    );
}

export default Search;
