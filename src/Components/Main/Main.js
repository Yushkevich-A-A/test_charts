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
    const { data, ratio, offset, devToTest, testToProd } = props;
    console.log(data);
    return (
        <div className='main-field'>
            <div className="result-block">
                <ArrowHorisontalLine><Results result={devToTest}/></ArrowHorisontalLine>
                <ArrowHorisontalLine><Results result={testToProd}/></ArrowHorisontalLine>
                <EmptyLine />
            </div>
            <div className="main-list">
                <ChartItem title='dev' data={data.dev} ratio={ratio} offset={offset}>
                    <ArrowLine />
                </ChartItem>
                <ChartItem title='test' data={data.test} ratio={ratio} offset={offset}>
                    <ArrowBottom />
                    <ArrowLine />
                </ChartItem>
                <ChartItem title='prod' data={data.prod} ratio={ratio} offset={offset}>
                    <ArrowBottom />
                </ChartItem>
                <Standard title='норматив' value={data.norm} ratio={ratio} offset={offset}/>
            </div>
        </div>
    )
}

Main.propTypes = {

}

export default Main;

