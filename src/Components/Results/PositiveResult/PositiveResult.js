import React from 'react'
import PropTypes from 'prop-types'

import './PositiveResult.css';

function PositiveResult(props) {


    return (
        <div className="positive-result-wrapper">
            <div className='positive-result'>
                <span className="positive-result-text">
                    +26
                </span>
            </div>
        </div>

    )
}

PositiveResult.propTypes = {

}

export default PositiveResult;

