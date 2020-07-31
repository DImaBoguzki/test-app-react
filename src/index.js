import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {FishProvider} from './Provider/fishProvider';
const WrapRoute = (app) => {
  return (
    <BrowserRouter> 
      <FishProvider>
        {app} 
      </FishProvider>
    </BrowserRouter>
  );
}

ReactDOM.render(
  WrapRoute(<App />),
  document.getElementById('root')
);
serviceWorker.unregister();
