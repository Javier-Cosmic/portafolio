import React from 'react';
import Header from './Header';
import data from '../data.json';
import List from './List';

const Home = () => {
    return (
        <div>
            <Header />
            <div className='list-container'>
                {data.project.map((project) => (
                    <List key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
};

export default Home;
