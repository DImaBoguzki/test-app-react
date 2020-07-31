import React,{ createContext, useReducer} from 'react';
export const FishContext = createContext();
export const INCREAMENT_FISH = 'increase';
export const RESET_FISH = 'reset';

function fishReducer(state,action){
  switch(action.type){
    case INCREAMENT_FISH:{
      return [...state,action.payload];
    }
    case RESET_FISH:
      return [];
    default:
      return state;
  }
}

export function FishProvider({children}) {
  const [state, dispatch] = useReducer(fishReducer,[]);

  return (
    <FishContext.Provider value={{state, dispatch}}>
      {children}
    </FishContext.Provider>
  )
}
