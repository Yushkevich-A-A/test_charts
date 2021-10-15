import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../../Components/Header/Header';
import ButtonMenu from '../../Components/ButtonMenu/ButtonMenu';
import Title from '../../Components/Title/Title';
import Description from '../../Components/Description/Description';
import Main from '../../Components/Main/Main';

import './Chart.css';
import ListDataServer from '../../Components/ListDataServer/ListDataServer';

function Chart(props) {
    const { handleChangeSourse, list, selectedUrl } = props;
    const [ openMenu, setOpenMenu ] = useState(false);

    const handleOpenMenu = () => {
        setOpenMenu(!openMenu)
    }

    return (
        <div className='chart'>
            <Header>
                <Title title={props.data.title} />
                <ButtonMenu handleClick={handleOpenMenu}/>
                { openMenu && <ListDataServer handleChangeSourse={handleChangeSourse} 
                list={list} selectedUrl={selectedUrl}
                handleOpenMenu={handleOpenMenu}/>}
            </Header>
            <Main {...props}/>
            <Description/>
        </div>
    )
}

Chart.propTypes = {
    handleChangeSourse: PropTypes.func.isRequired,
    list: PropTypes.array.isRequired,
    selectedUrl: PropTypes.string.isRequired,
};

export default Chart;

