import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../Components/Header/Header';
import ButtonMenu from '../../Components/ButtonMenu/ButtonMenu';

import './Chart.css';
import Title from '../../Components/Title/Title';
import Description from '../../Components/Description/Description';
import Main from '../../Components/Main/Main';


function Chart(props) {
    return (
        <div className='chart'>
            <Header>
                <Title title={props.data.title} />
                <ButtonMenu handleClick={() => console.log('Привет мир')}/>
            </Header>
            <Main {...props}/>
            <Description/>
        </div>
    )
}

Chart.propTypes = {

};

export default Chart;

