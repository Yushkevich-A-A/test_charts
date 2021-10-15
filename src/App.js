import React, {useState, useEffect} from 'react';
import Chart from './Page/Chart/Chart';
import ProviderContext from './Providers/ProviderContext/ProviderContext';
import jsonData from './Data/Data';
import getMaxValue from './functions/getMaxValue/getMaxValue';
import getSum from './functions/getSum/getSum';
import getOffset from './functions/getOffset/getOffset';
import './App.css';

function App() {
  const [ data, setData ] = useState(null);
  const [ ratio, setRatio ] = useState(0);
  const [ devToTest, setDevToTest] = useState(0);
  const [ testToProd, setTestToProd] = useState(0);
  const [ offset, setOffset ] = useState(1);
  const [ urlData, setUrlData ] = useState(jsonData[0]);

  useEffect(() => {
    try {
      fetch(urlData.url)
        .then( response => response.json())
        .then( data => setData(data))
    }catch(e) {
      console.log(e.message)
    }
  }, [urlData]);


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

  const handleChangeSourse = (id) => {
    setUrlData(jsonData.find( item => item.id === id))
  }

  return (
    <div className="App">
      <ProviderContext ratio={ratio} offset={offset}>
      {data && <Chart data={data} devToTest={devToTest} 
      testToProd={testToProd} handleChangeSourse={handleChangeSourse} 
      list={jsonData} selectedUrl={urlData.id}/>}
      </ProviderContext>
    </div>
  );
}

export default App;