import React,{ useContext} from 'react';
import { fishUrl } from '../../imgURLS';
import {FishContext,INCREAMENT_FISH,RESET_FISH} from '../../Provider/fishProvider';
import './fish.css';


export default function FishPage ({route}) {
  const fish = useContext(FishContext);
  let refDiv = React.createRef(null);
  const handleAddFish = () =>{
    let x = Math.random()*(refDiv.current.offsetHeight-100);
    let y = Math.random()*(refDiv.current.offsetWidth-100)+50;
    fish.dispatch({type:INCREAMENT_FISH,payload:{x,y}});
  }
  const goToHome = () =>{
    route.history.push('/');
  }
  return (
    <div ref={refDiv} className='fish-page' >
      {
      fish.state.map((el,i)=>{
        return <img key={i} className='fish-img' src={fishUrl} 
              style={{top:`${el.y}px`,left:`${el.x}px`}} alt='fish'/>
        })
      }
      <button onClick={handleAddFish}>Add</button>
      <button onClick={()=>fish.dispatch({type:RESET_FISH})}>Reset</button>
      <button onClick={goToHome}>go home</button>
    </div>
  );
}