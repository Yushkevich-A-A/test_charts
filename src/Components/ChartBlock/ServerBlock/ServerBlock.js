import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import RatioContext from '../../../Context/RatioContext';
import './ServerBlock.css';

function ServerBlock(props) {
    const { value } = props;
    const { ratio, offset } = useContext(RatioContext);
    const height = Math.round(Number(value / offset) * Number(ratio)) || 1;
    return (
        <div className='server-block' style={{height: `${height}px`}}>
            <p className='server-block-text'>{value}</p>
        </div>
    )
}

ServerBlock.propTypes = {
    value: PropTypes.number.isRequired,
};

export default ServerBlock;

