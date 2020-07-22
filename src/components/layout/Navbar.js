import React from 'react';
// rce
import PropTypes from 'prop-types';
// impt
import { Link } from 'react-router-dom';

const Navbar = ({ icon, name }) => {
    return (
        <nav className='navbar bg-primary'>
            <h1>
                {/* props.icon */}
                <i className={icon}> {name} </i>
            </h1>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>
        </nav>
    );
};

Navbar.defaultProps = {
    name: ' Github Finder',
    icon: 'fab fa-github',
};

Navbar.propTypes = {
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
};

export default Navbar;
