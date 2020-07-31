import React,{useEffect,useState} from 'react';

function Products({query}) {
  const [products, setProducts] = useState(null);

  useEffect(()=> {
    fetch(`http://localhost/test/server/main.php/?get=products&subcategory_id=${query.match.params.subcategory}`)
    .then(res=>{return res.json()})
    .then(data=>{
      setProducts(data);
    })
    .catch(err=>console.log('error!!! ',err));
  },[query.match.params.subcategory]);
  const displayProducts = () =>{
    if(products!==null){
      return products.map((el,i)=>{
        return(
          <div key={i} className='card-product'>
            <img src={'http://localhost/test/'+el.img} alt={el.name}/>
            <h5>{el.name}</h5>
            <p>{el.description}</p>
            <p>{el.price}</p>
          </div>
        );
      })
    }
  }
  return(
    <div>
      <button onClick={()=>{query.history.goBack()}}>Go Back</button>
      <h1>{`product id = ${query.match.params.subcategory}`}</h1>
      <div className='container-products'>
        {displayProducts()}
      </div>
    </div>
  );
}


export default Products;