const getSum = (a) => {
    return Object.keys(a).map( item => a[item]).reduce( (sum, cur) => sum + cur, 0) 
  }

export default getSum;