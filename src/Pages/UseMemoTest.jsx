import React, { useState,useMemo,useEffect, useCallback } from "react";

function slowFnction(num){
  for(let i=0;i<10000;i++){}
  return num*2;
  
}

function UseMemoTest(props){
  const[number, setNumber] = useState(0);
  const[dark, setDark] = useState(false);

  const getItmes = useCallback((num) =>{
    return [number+num,number+1+num,number+2+num];
  },[number])

  const doubleNumber = useMemo(()=>{
    return slowFnction(number)
  },[number]);

  const themeStyle = useMemo(()=>{
    return {
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black',
    }
  },[dark])
    useEffect(()=>{
    console.log("theme chaged")
  },[themeStyle])
  
  return(
    <>
      <input 
        type='number'
        value={number}
        onChange={(e)=>setNumber(parseInt(e.target.value))}
      />
      <button onClick={()=>{setDark(d=>!d)}}>Change Theme</button>
      <div style={themeStyle}>{doubleNumber}</div>
      <List getItmes={getItmes}/>
    </>
  );
}


export default UseMemoTest;
const List = ({getItmes}) => {
  const [items,setItems] = useState([])
  useEffect(()=>{
    setItems(getItmes(12));
    console.log("items updated");
  },[getItmes])
  return (
  items.map((el,i)=>{return <div key={i}>{el}</div>})
  )
 
}