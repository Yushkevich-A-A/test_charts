import React from 'react';
import PropTypes from 'prop-types'
import ChartItem from '../ChartItem/ChartItem';
import ArrowLine from '../Arrows/ArrowLine/ArrowLine';

import './Main.css'
import ArrowBottom from '../Arrows/ArrowBottom/ArrowBottom';
import Standard from '../Standard/Standard';
import PositiveResult from '../Results/PositiveResult/PositiveResult';
import ArrowHorisontalLine from '../Arrows/ArrowHorisontalLine/ArrowHorisontalLine';
import NegativeResult from '../Results/NegativeResult/NegativeResult';
import EmptyLine from '../Arrows/EmptyLine/EmptyLine';

function Main(props) {
    return (
        <div className='main-field'>
            <div className="result-block">
                <ArrowHorisontalLine><NegativeResult /></ArrowHorisontalLine>
                <ArrowHorisontalLine><PositiveResult /></ArrowHorisontalLine>
                <EmptyLine />
            </div>
            <div className="main-list">
                <ChartItem title='dev'>
                    <ArrowLine />
                </ChartItem>
                <ChartItem title='test'>
                    <ArrowBottom />
                    <ArrowLine />
                </ChartItem>
                <ChartItem title='prod'>
                    <ArrowBottom />
                </ChartItem>
                <Standard title='норматив'/>
            </div>
        </div>
    )
}

Main.propTypes = {

}

export default Main;

