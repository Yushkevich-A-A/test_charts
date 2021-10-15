import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import RatioContext from '../../../Context/RatioContext';
import './DBBlock.css';

function DBBlock(props) {
    const { value } = props;
    const { ratio, offset } = useContext(RatioContext)
    const height = Math.round(Number(value / offset) * Number(ratio)) || 1;
    return (
        <div className='db-block' style={{height: `${height}px`}}>
            <p className='db-block-text'>{value}</p>
        </div>
    )
}

DBBlock.propTypes = {
    value: PropTypes.number.isRequired,
};

export default DBBlock;

