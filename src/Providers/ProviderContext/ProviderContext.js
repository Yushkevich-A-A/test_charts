import React from 'react'
import PropTypes from 'prop-types'
import RatioContext from '../../Context/RatioContext'

function ProviderContext(props) {
    const { ratio, offset } = props;

    return (
        <RatioContext.Provider value={{ratio, offset}}>
            {props.children}
        </RatioContext.Provider>
    )
}

ProviderContext.propTypes = {

}

export default ProviderContext

