import React from 'react';
import PropTypes from 'prop-types';

import './ChartBlock.css';
import DBBlock from './DBBlock/DBBlock';
import ClientBlock from './ClientBlock/ClientBlock';
import ServerBlock from './ServerBlock/ServerBlock';

function ChartBlock(props) {
    const { title } = props;

    return (
        <div className='chart-block-wrapper'>
            <div className='chart-block'>
                <ClientBlock />
                <ServerBlock />
                <DBBlock />
            </div>
            <h3 className='chart-block-h3'>{title}</h3>
        </div>
    )
}

ChartBlock.propTypes = {

};

export default ChartBlock;

