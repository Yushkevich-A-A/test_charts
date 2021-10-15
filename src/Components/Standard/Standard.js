import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import RatioContext from '../../Context/RatioContext';
import './Standard.css';

function Standard(props) {
        const { title, value, } = props;
        const { ratio, offset } = useContext(RatioContext)
        const height = Number(value / offset) * Number(ratio) || 1;
    return (
        <div className='standard-block-wrapper'>
            <div className='standard-block' style={{height: `${height}px`}}>
                <p className='standard-block-text'>{value}</p>
            </div>
            <h3 className='standard-block-h3'>{title}</h3>
        </div>
    )
}

Standard.propTypes = {

};

export default Standard;

