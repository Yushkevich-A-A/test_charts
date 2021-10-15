import React from 'react';
import PropTypes from 'prop-types';

import './Title.css';

function Title(props) {
    const { title } = props;
    return (
        <div className='title'>
            Колличество пройденных тестов "{title}"
        </div>
    )
}

Title.defaultProps = {
    title: 'Примерный график'
}

Title.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Title;

