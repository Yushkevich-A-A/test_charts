import React from 'react';
import PropTypes from 'prop-types';

import './ChartBlock.css';
import DBBlock from './DBBlock/DBBlock';
import ClientBlock from './ClientBlock/ClientBlock';
import ServerBlock from './ServerBlock/ServerBlock';

function ChartBlock(props) {
    const { data, title, ratio, offset  } = props;
    return (
        <div className='chart-block-wrapper'>
            <div className='chart-block'>
                <ClientBlock ratio={ratio} value={data.front} offset={offset}/>
                <ServerBlock ratio={ratio} value={data.back} offset={offset}/>
                <DBBlock ratio={ratio} value={data.db} offset={offset}/>
            </div>
            <h3 className='chart-block-h3'>{title}</h3>
        </div>
    )
}

ChartBlock.propTypes = {

};

export default ChartBlock;

