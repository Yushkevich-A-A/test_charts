import React from 'react';
import PropTypes from 'prop-types';
import NegativeResult from './NegativeResult/NegativeResult';
import NeutralResult from './NeutralResult/NeutralResult';
import PositiveResult from './PositiveResult/PositiveResult';

const getResult = (value) => {
    if (value < 0) {
        return <NegativeResult value={value}/>
    } else if (value > 0) {
        return <PositiveResult value={value}/>
    } else {
        return <NeutralResult/>
    }
}

function Results(props) {
    const { result } = props;
    const component = getResult(result);
    return (
        <>
        {component}
        </>
    )
}

Results.propTypes = {
    result: PropTypes.number.isRequired,
}

export default Results;

