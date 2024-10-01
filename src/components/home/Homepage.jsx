import React from 'react';
import Trending from './Trending';
import TopContent from './TopContent';
import TopCreator from './TopCreator';

const Homepage = () => {
    return (
        <div>
            <Trending />
            <TopContent />
            <TopCreator />
        </div>
    );
};

export default Homepage;