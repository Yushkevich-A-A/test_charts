import React from 'react'
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

export default ChartItem

