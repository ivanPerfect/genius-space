import {useEffect, useLayoutEffect, useState} from 'react';

function App() {
const[value,setValue]= useState(0);
  
  useEffect(() => {
    console.log('Chenged')
  }, [value]);

  const handleClick=()=>{
    setValue(value+1);
  }
  useLayoutEffect(()=>{
    console.log("useLayoutEffect")
  },[handleClick]);

  
  return (
    <div className="App">
      <h1>{value}</h1>
     <button onClick={handleClick}>TOUCH ME</button>
    </div>
  );
}

export default App;
