import React from 'react';
import PropTypes from 'prop-types';

import './ArrowHorisontalLine.css';

function ArrowHorisontalLine(props) {
    return (
        <div className='arrow-horisontal-line-wrapper'>
            <div className='arrow-horisontal-line'>
                {props.children}
            </div>
        </div>

    )
}

ArrowHorisontalLine.propTypes = {

};

export default ArrowHorisontalLine;

