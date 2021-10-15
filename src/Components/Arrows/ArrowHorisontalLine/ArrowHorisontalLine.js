import React from 'react';

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

export default ArrowHorisontalLine;

