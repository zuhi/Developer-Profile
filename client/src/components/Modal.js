import React from 'react';
import './Modal.css';

const { useState } = React;

export function Modal(props) {
    const { closeModal } = props;
    const [input, setInput] = useState({
        github_id: '',
        linkedin_id: '',
        codechef_id: '',
        hackerrank_id: '',
        twitter_id: '',
        medium_id: '',
    });

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInput({ ...input, [name]: value });
    };

    const onSubmit = (event) => {
        event.preventDefault();
        const dataObj = {
            'github_id': input.github_id,
            'linkedin_id': input.linkedin_id,
            'codechef_id': input.codechef_id,
            'hackerrank_id': input.hackerrank_id,
            'twitter_id': input.twitter_id,
            'medium_id': input.medium_id,
        };
        if(dataObj.github_id.length===0){
            console.log("Alert!");
            alert("You have not entered Github ID, please enter and re-submit");

        }
        else{
            console.log("else");

            const obj = fetch('/api/developers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataObj),
            }).then((response) => {
                try {
                    const data = response;
                    console.log('response data?', data);
                } catch (error) {
                    console.log('Error happened here!');
                    console.error(error);
                }
            });
            closeModal();

        }
    };

    return (
        <div className="modal-body">
            <div className="Modal-Content">
                <div className="header-section">
                    <h1>Add developer profile</h1>
                </div>
                <hr />
                <div className="content">
                    <form className="content" onSubmit={onSubmit}>
                        <div>
                            <img src="/github.png" alt="Github-img" />
                            <label htmlFor="Github">Github*</label>
                        </div>
                        <input
                            type="text"
                            name="github_id"
                            id="Github"
                            value={input.github_id}
                            onChange={handleChange}
                        />
                        <div>
                            <img src="/linkedin.png" alt="Linkedin-img" />
                            <label htmlFor="Linkedin">Linkedin</label>
                        </div>
                        <input
                            name="linkedin_id"
                            type="text"
                            id="Linkedin"
                            value={input.linkedin_id}
                            onChange={handleChange}
                        />
                        <div>
                            <img src="/codechef.png" alt="Codechef-img" />
                            <label htmlFor="Codechef">Codechef</label>
                        </div>
                        <input
                            name="codechef_id"
                            type="text"
                            id="Codechef"
                            value={input.codechef_id}
                            onChange={handleChange}
                        />
                        <div>
                            <img src="/hackerrank.png" alt="hackerrank-img" />
                            <label htmlFor="Hackerrank">Hackerrank</label>
                        </div>
                        <input
                            name="hackerrank_id"
                            type="text"
                            id="Hackerrank"
                            value={input.hackerrank_id}
                            onChange={handleChange}
                        />
                        <div>
                            <img src="/twitter.png" alt="twitter-img" />
                            <label htmlFor="Twitter">Twitter</label>
                        </div>
                        <input
                            name="twitter_id"
                            type="text"
                            id="Twitter"
                            value={input.twitter_id}
                            onChange={handleChange}
                        />
                        <div>
                            <img src="/medium.png" alt="medium-img" />
                            <label htmlFor="Medium">Medium</label>
                        </div>
                        <input
                            name="medium_id"
                            type="text"
                            id="Medium"
                            value={input.medium_id}
                            onChange={handleChange}
                        />
                        <hr />
                        <div className="modelButtons">
                            <button type="button" onClick={closeModal}>
                                Cancel
                            </button>
                            <button type="button" value="Submit" onClick={onSubmit}>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
