import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './navbar.css'


function NavBar(props){
  return (
    <nav className='App-nav'>
      <NavLink exact className='link' activeClassName='active-link' to='/'>Home</NavLink>
      <NavLink className='link' activeClassName='active-link' to='/fish'>Fish</NavLink>
      <NavLink className='link' activeClassName='active-link' to='/use-memo-test'>use-memo-test</NavLink>
      <NavLink className='link' activeClassName='active-link' to='/counter'>Counter</NavLink>
    </nav>
  )
} 

export default withRouter(NavBar);