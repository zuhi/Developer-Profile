import React from 'react';
import './Home.css';
import { Banner } from './components/banner.js';
import { Footer } from './components/footer';
import { SearchBar } from './components/searchBar';
import { Divider } from './components/Divider';
import { Adddevloper } from './components/Adddeveloper';

export function Home() {
    return (
        <div className="elementStyle">
            <Banner />
            <Divider />
            <hr />
            <SearchBar />
            <hr />
            <Adddevloper />
            <Footer />
        </div>
    );
}