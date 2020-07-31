import React,{useCallback, useState,memo,useRef} from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const favoriteNums = [36,12,4]; 

  const increament = useCallback((n)=>{
      setCount(c=>c+n);
  },[setCount]);
return (
    <div className="App">
      <Hello increament={increament}/>
      <h1>counter: {count}</h1>
      {
        favoriteNums.map((n,i)=>{
          return <Square key={i} n={n} increament={increament}/>
        })
      }
    </div>
  );
}

export default Counter;

const Hello = memo(({increament})=>{
  const renders = useRef(0);
  console.log('renders square: ',renders.current++);
  return (
    <div>
      <button onClick={()=>increament()}>click</button>
    </div>
  );
});

const Square = memo(({increament,n}) => {
  const renders = useRef(0);
  console.log('renders square: ',renders.current++);
  return(
    <button onClick={()=>increament(n)}>{n}</button>
  );
})
