import React from "react";
import './Adddevloper.css';
import { Modal } from './Modal';

const { useState } = React;

export function Adddevloper() {
    const [display, setDisplay] = useState(false);

    function dontDisplay() {
        setDisplay((prevState) => {
            prevState = false;
        });
    }
    function doDisplay() {
        setDisplay(true);
    }

    return (
        <div className="add-dev-box">
            <div>
                <h1>Could not find what you were looking for?</h1>
            </div>
            {display ? <Modal closeModal={dontDisplay} /> : null}
            <div>
                <button className="addDevBtn" type="button" onClick={doDisplay}>
                    Add developer info
                </button>
            </div>
        </div>
    );
}