import React, {useState, useEffect} from 'react';
import './App.css';
import Chart from './Page/Chart/Chart';

const getMaxValue = (data) => {
  const valuesArr = Object.keys(data).filter(item => item !== 'title').map(item => data[item]);
  const arrData = valuesArr.map( item => (typeof item !== 'object') ? item : getSum(item) );
  return Math.max(...arrData);
}

const getSum = (a) => {
  return Object.keys(a).map( item => a[item]).reduce( (sum, cur) => sum + cur, 0) 
}

const getOffset = (value) => {
  if (value < 260) {
    return 1;
  }
  let offset = 1;
  let result = value;
  do {
    offset *= 10;
  } while (result / offset > 260)

  return offset;
}

function App() {
  const [ data, setData ] = useState(null);
  const [ ratio, setRatio ] = useState(0);
  const [ devToTest, setDevToTest] = useState(0);
  const [ testToProd, setTestToProd] = useState(0);
  const [ offset, setOffset ] = useState(1);

  useEffect(() => {
    try {
      fetch('https://rcslabs.ru/ttrp4.json')
        .then( response => response.json())
        .then( data => setData(data))
    }catch(e) {
      console.log(e.message)
    }
  }, []);


  useEffect(() => {
    if (data === null) {
      return;
    }
    const maxValue = getMaxValue(data);
    const offsetValue = getOffset(maxValue);
    setOffset( offsetValue );
    setRatio(Math.round(260 / (maxValue / offsetValue) * 10) / 10);
    setDevToTest(getSum(data.dev) - getSum(data.test));
    setTestToProd(getSum(data.test) - getSum(data.prod));
  },[data])

  return (
    <div className="App">
      {console.log(offset)}
      {data && <Chart ratio={ratio} data={data} devToTest={devToTest} testToProd={testToProd} offset={offset}/>}
    </div>
  );
}

export default App;