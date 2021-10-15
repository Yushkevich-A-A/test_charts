import React from 'react'
import PropTypes from 'prop-types'
import ChartBlock from '../ChartBlock/ChartBlock'

import './ChartItem.css';

function ChartItem(props) {
    const { title } = props;

    return (
        <div className='chart-item'>
            <div className="empty-block">
                {
                    props.children
                }
            </div>
            <ChartBlock title={title}/>
        </div>
    )
}

ChartItem.propTypes = {

}

export default ChartItem

