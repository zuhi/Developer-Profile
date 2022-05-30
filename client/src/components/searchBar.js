import React from 'react';
import './searchBar.css';
import { SearchResult } from './searchResult';

const { useState, useRef } = React;

export function SearchBar() {
    const inputRef = useRef();
    const [userInput, setuserInput] = useState('');

    function searchFunction() {
        setuserInput(inputRef.current.value);
    }

    return (
        <div className="outer-section">
            <div className="searchSection">
                <input ref={inputRef} type="text" placeholder="Search for username" name="Search" />
                <button type="button" className="searchButton" onClick={searchFunction}>
                    <i className="fa fa-search" />
                </button>
            </div>
            <SearchResult searchData={userInput} />
        </div>
    );
}
