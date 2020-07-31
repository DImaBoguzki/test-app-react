import React from 'react';
import { Route,Switch } from 'react-router-dom';
import FishPage from './Pages/Fish/fishPage';
import NavBar from './components/navbar/NavBar';
import Counter from './Pages/counter';
import UseMemoTest from './Pages/UseMemoTest';
import NavbarCategories from './components/NavbarCategories/navbarCategories';
import Products from './Pages/Products/products';
import './App.css';


function App() {
  return (
    <div className="App-wrapper">
      <NavBar/>
      <NavbarCategories/>
      <div className="App-main">
        <Switch>
          <Route exact path='/' component={()=>
              <HomePage/>
          }/>
          <Route path='/fish' component={(routeProps)=>
              <FishPage route={routeProps}/>
          }/>
          <Route path='/counter' component={()=><Counter/>}/>
          <Route path='/use-memo-test' component={()=><UseMemoTest />}/>

          <Route path='/products/:subcategory' component={(query)=><Products query={query}/>} />
          <Route render={()=><Error/>}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;

const HomePage = () => {
  return (
    <div className='home-page'>
      <h1 style={{color:'white',margin:0}}>Home Page</h1>
    </div>
  )
}


const Error = () =>{
  return <h1>404 page</h1>
}