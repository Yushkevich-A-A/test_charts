import getSum from "../getSum/getSum";

const getMaxValue = (data) => {
    const valuesArr = Object.keys(data).filter(item => item !== 'title').map(item => data[item]);
    const arrData = valuesArr.map( item => (typeof item !== 'object') ? item : getSum(item) );
    return Math.max(...arrData);
  }

export default getMaxValue;

