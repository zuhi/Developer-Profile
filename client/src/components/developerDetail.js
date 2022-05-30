import React from 'react';
import './developerDetail.css';
import { Link, useLocation } from 'react-router-dom';

const { useState, useEffect } = React;

export function DevDetails() {
    const location = useLocation();

    const [loc, setLoc] = useState('');
    const [devObj, setDevObj] = useState({});
    const [repoObj, setrepoObj] = useState([]);

    const [received, setRecived] = useState(false);

    useEffect(() => {
        setLoc(location.state.devid);
    }, []);

    useEffect(() => {
        fetch(`/api/developers/${loc}`, { mode: 'cors' })
            .then((response) => response.json())
            .then((data) => {
                setDevObj(data);
                setrepoObj(data.repos);
            })
            .then(()=> {
                setRecived(true);
            })
    }, [loc]);

    if (devObj === undefined || devObj.repos === undefined || repoObj === undefined) {return;}

    if(received) {
        const rep = repoObj;
        return (
            <> 
                <div className="detail-header">
                    <h1>The Developer Profile</h1>
                    <div className="all-dev-button">
                        <button className="devButton" type="button">
                            <Link to="/" > All Developers </Link>
                        </button>
                    </div>
                </div>
                <div className="dev-detail-card">
                    <div className="image-property">
                        {devObj.avatar_url.length>0 ? <img className="dev-avatar" src={devObj.avatar_url} alt="Avatar-url" /> : <img className="devImage" src="/account.svg" alt="Account" />}
                    </div>
                    <div className="card-content">
                        <h1>{devObj.name}</h1>
                        <h4>{devObj.bio}</h4>
                        <div className="dev-icon">
                            <div>
                                <a href={`https://github.com/${devObj.github_id}`} target="_blank"><img className='image' src="/github.png" alt="Github" /></a>
                            </div>
                            <div>
                                <a href={`https://www.hackerrank.com/${devObj.hackerrank_id}`} target="_blank"><img className='image' src="/hackerrank.png" alt="Hackerrank" /></a>
                            </div>
                            <div>
                                <a href={`https://www.codechef.com//${devObj.codechef_id}`} target="_blank"><img src="/codechef.png" alt="Codechef" /></a>
                            </div>
                            <div >
                                <a href={`https://www.linkedin.com/in/${devObj.linkedin_id}`} target="_blank"><img className='image' src="/linkedin.png" alt="Linkedin" /></a>
                            </div>
                            <div >
                                <a href={`https://medium.com/${devObj.medium_id}`} target="_blank"><img className='image' src="/medium.png" alt="Medium" /></a>
                            </div>
                            <div >
                                <a href={`https://twitter.com/${devObj.twitter_id}`} target="_blank"><img className='image' src="/twitter.png" alt="Twitter" /></a>
                            </div>
                            <div >
                                <a href={`https://mail.google.com/mail/u/0/#inbox?compose=new`} target="_blank"><img className='image' src="/email.svg" alt="Email" /></a>
                            </div>
                        </div>
                        <div className='dev-icon-text'>
                            <div className='dev-icon-text-items'>
                                <div>
                                    <img src="/location.svg" alt="Location" />
                                </div>
                                <div>{devObj.location}</div>
                            </div>
                            <div>
                                <div>
                                    <img src="/bussiness.svg" alt="Company" />
                                </div>
                                <div>{devObj.company}</div>
                            </div>
                            <div>
                                <div>
                                    <img src="/link.svg" alt="website" />
                                </div>
                                <div>{devObj.blog}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="github-repo-banner">
                    <h1>Github Repositories</h1>
                </div>
                <div className="github-repo-container">
                    <hr className="developerDetailHr" />
                    {rep.map((item) => (
                        <div className="devdisplayCard">
                            <h3>{item.name}</h3>
                            <button type="button" className="accountButton">
                                {item.html_url?<a href={item.html_url}><img src="/arrow.svg" alt="Profile detail" /></a>:<img src="/arrow.svg" alt="Profile detail" />}
                            </button>
                            <h4>Updated on {item.updated_at}</h4>
                        </div>
                    ))}
                    <hr className="developerDetailHr" />
                </div>
                
            </>
        );
    }

    else{
        return <h1>Profile is Loading!</h1>
    }
}
