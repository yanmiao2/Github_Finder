import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItems = ({ user1: { login, avatar_url, html_url } }) => {
    // (props)
    // const { login, avatar_url, html_url } = props.user1;
    return (
        <div className='card text-center'>
            <img
                src={avatar_url}
                alt='Not Available'
                className='round-img'
                style={{ width: '60px' }}
            />
            <h3>{login}</h3>
            <div>
                <Link
                    to={`/user/${login}`}
                    className='btn btn-dark btn-sm my-1'
                >
                    More
                </Link>
            </div>
        </div>
    );
};

UserItems.propTypes = {
    user1: PropTypes.object.isRequired,
};

export default UserItems;
