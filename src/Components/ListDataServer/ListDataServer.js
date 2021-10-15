import React from 'react';
import PropTypes from 'prop-types';

import './ListDataServer.css';
import ItemDataJson from './ItemDataJson/ItemDataJson';

function ListDataServer(props) {
    const { handleChangeSourse, handleOpenMenu, list, selectedUrl } = props;

    return (
        <div className='json-data-list'>
            {
                list.map( item => <ItemDataJson key={item.id} selectedUrl={selectedUrl}
                    handleChangeSourse={handleChangeSourse} handleOpenMenu={handleOpenMenu}
                    item={item}/>)
            }
        </div>
    )
}

ListDataServer.propTypes = {
    handleChangeSourse: PropTypes.func.isRequired,
    handleOpenMenu: PropTypes.func.isRequired,
    selectedUrl: PropTypes.string.isRequired,
    list: PropTypes.array.isRequired,
};

export default ListDataServer;

