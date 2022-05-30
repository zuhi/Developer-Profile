import React from 'react';
import './searchResults.css';
import { useNavigate } from 'react-router-dom';

const { useEffect, useState } = React;

export function SearchResult(props) {
    console.log('Inside search result', props.searchData);
    const [developerIds, setId] = useState([]);

    const navigate = useNavigate();

    function handleClick(val) {
        console.log('handleClick');
        console.log(val);
        navigate('/DevDetails', { state: { devid: val } });
    }

    useEffect(() => {
        const resp = fetch('/api/developers', { mode: 'cors' })
            .then((response) => response.json())
            .then((data) => setId(data.id));
    }, [props.searchData]);

    return (
        <div className="cardArrangment">
            {developerIds.map((name) => (
                <div className="displayCard">
                    <img className="accountImage" src="/account.svg" alt="Account" />
                    <h2 className="cardName">{name}</h2>
                    <button type="button" className="accountButton" onClick={() => handleClick(name)}>
                        <img src="/arrow.svg" alt="Profile detail" />
                    </button>
                </div>
            ))}
        </div>
    );
}
