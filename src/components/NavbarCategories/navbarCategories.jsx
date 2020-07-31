import React,{useEffect,useState} from 'react';
import { NavLink } from 'react-router-dom';
import './navbarCategories.css';


function NavbarCategories(){
  const [categories,setCategories] = useState(null);

  useEffect(()=>{
    fetch('http://localhost/test/server/main.php/?get=categories')
    .then(res=>{return res.json()})
    .then(data=>{
      console.log(data)
      setCategories(data)
    })
    .catch(err=>console.log('error!!! ',err));
  },[])

  const setLinksCategories = () =>{
    if(categories!==null){
      return categories.map((el,i)=>{
        return (
          <li key={i} className='link-item'>
            <NavLink className='underline' exact to={`/products/${el.id}`}> 
              {el.name}
            </NavLink> 
          </li>
        )
      })
    }
    return null;
  }

  return (
  <>
    <nav className='nav'>
      <ul className='links-container'>
        {setLinksCategories()}
      </ul>
    </nav>
    <div className='dorop-container'>
      
    </div>
    </>
  );
}
export default NavbarCategories;