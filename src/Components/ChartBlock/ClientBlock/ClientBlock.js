import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import RatioContext from '../../../Context/RatioContext';

import './ClientBlock.css';

function ClientBlock(props) {
    const { value } = props;
    const { ratio, offset } = useContext(RatioContext)

    const height = Math.round(Number(Math.round(value / offset)) * Number(ratio)) || 1;

    return (
        <div className='client-block' style={{height: `${height}px`}}>
            <p className='client-block-text'>{value}</p>
        </div>
    )
}

ClientBlock.propTypes = {

};

export default ClientBlock;

