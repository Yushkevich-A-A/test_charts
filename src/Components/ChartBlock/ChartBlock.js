import React from 'react';
import PropTypes from 'prop-types';

import './ChartBlock.css';
import DBBlock from './DBBlock/DBBlock';
import ClientBlock from './ClientBlock/ClientBlock';
import ServerBlock from './ServerBlock/ServerBlock';

function ChartBlock(props) {
    const { data, title } = props;
    return (
        <div className='chart-block-wrapper'>
            <div className='chart-block'>
                <ClientBlock value={data.front}/>
                <ServerBlock value={data.back}/>
                <DBBlock value={data.db}/>
            </div>
            <h3 className='chart-block-h3'>{title}</h3>
        </div>
    )
}

ChartBlock.propTypes = {
    data: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
};

export default ChartBlock;

