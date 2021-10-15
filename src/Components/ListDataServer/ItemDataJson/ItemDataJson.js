import React from 'react';
import PropTypes from 'prop-types';

import './ItemDataJson.css';

function ItemDataJson(props) {
    const { handleChangeSourse, handleOpenMenu, selectedUrl, item } = props;

    const handleClick = () => {
        handleChangeSourse(item.id);
        handleOpenMenu();
    }

    return (
        <div className={`json-data-item ${item.id === selectedUrl ? 'selected': ''}`}
            onClick={handleClick}>
            {item.title}
        </div>
    )
}

ItemDataJson.propTypes = {
    handleChangeSourse: PropTypes.func.isRequired,
    handleOpenMenu: PropTypes.func.isRequired,
    selectedUrl: PropTypes.string.isRequired,
    item: PropTypes.object.isRequired,
};

export default ItemDataJson;

