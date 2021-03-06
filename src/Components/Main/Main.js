import React from 'react';
import PropTypes from 'prop-types'
import ChartItem from '../ChartItem/ChartItem';
import ArrowLine from '../Arrows/ArrowLine/ArrowLine';

import './Main.css'
import ArrowBottom from '../Arrows/ArrowBottom/ArrowBottom';
import Standard from '../Standard/Standard';
import ArrowHorisontalLine from '../Arrows/ArrowHorisontalLine/ArrowHorisontalLine';
import EmptyLine from '../Arrows/EmptyLine/EmptyLine';
import Results from '../Results/Results';

function Main(props) {
    const { data, devToTest, testToProd } = props;
    return (
        <div className='main-field'>
            <div className="result-block">
                <ArrowHorisontalLine><Results result={devToTest}/></ArrowHorisontalLine>
                <ArrowHorisontalLine><Results result={testToProd}/></ArrowHorisontalLine>
                <EmptyLine />
            </div>
            <div className="main-list">
                <ChartItem title='dev' data={data.dev}>
                    <ArrowLine />
                </ChartItem>
                <ChartItem title='test' data={data.test}>
                    <ArrowBottom />
                    <ArrowLine />
                </ChartItem>
                <ChartItem title='prod' data={data.prod}>
                    <ArrowBottom />
                </ChartItem>
                <Standard title='норматив' value={data.norm}/>
            </div>
        </div>
    )
}

Main.propTypes = {
    data: PropTypes.object.isRequired,
    devToTest: PropTypes.number.isRequired,
    testToProd: PropTypes.number.isRequired,
}

export default Main;

