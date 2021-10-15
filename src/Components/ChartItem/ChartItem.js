import React from 'react'
import PropTypes from 'prop-types'
import ChartBlock from '../ChartBlock/ChartBlock'

import './ChartItem.css';

function ChartItem(props) {
    return (
        <div className='chart-item'>
            <div className="empty-block">
                {props.children}
            </div>
            <ChartBlock {...props}/>
        </div>
    )
}

ChartItem.propTypes = {

}

export default ChartItem

