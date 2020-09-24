import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { IconContext } from 'react-icons';

const Header = () => {
    return (
        <IconContext.Provider value={{ className: 'icons' }}>
            <div className='header'>
                <div className='header-container'>
                    <h1 className='title'>Cosmic Pages</h1>
                    <a href='https://github.com/Javier-Cosmic'>
                        <AiFillGithub />
                    </a>
                </div>
            </div>
        </IconContext.Provider>
    );
};

export default Header;
