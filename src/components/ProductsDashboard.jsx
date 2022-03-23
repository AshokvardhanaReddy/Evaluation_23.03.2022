import React, { useEffect } from "react";
import {Link} from "react-router-dom";

export const Products = () => {
  const [data, setData] = React.useState([]);
  
  // to get all products list on component mounts
  useEffect(() => {
    //   dispatch an action to the store
    // dont make call here
    // handle it as thunk call in actions.js
    // dispatch(getproductsData())

    fetch('https://movie-fake-server.herokuapp.com/products')
            .then(res=>res.json())
            .then(json=>{
              setData(json)
            })
  }, [data]); //dispatch

  //    sort by price
  const handleSort = (e) => {
    // dispach handle sort action to the store
    var value = e.target.value;
    if(value === "asc"){
    var asc =   data.sort((a,b)=>{
        return a.price - b.price
      })

      setData(asc)
    }

    if(value === "desc"){
       var desc = data.sort((a,b)=>{
         return b.price - a.price
       })
       setData(desc)
    }
    console.log(data);
  };
  return (
    <>
      <h2>Products</h2>
      <select onChange={handleSort}>
        <option>--sort by --</option>
        <option value="asc" >low to high</option>
        <option value="desc">high to low</option>
      </select>
      <div className="products-list" style={{ marginLeft:"4%", display:"grid", gridTemplateColumns: "24% 24% 24% 24%"}}>
        {/* map throught th products  list and display the results */}
        {data &&
          data.map((e,index) => {
            // console.log(e)
            return <div style={{ width:"90%",margin:"5px",border:"1px solid blue", borderRadius:"12px", textDecoration:"none", marginTop:"20px"}}  key={index}>{
              /* display the results here */
             <Link style={{textDecoration:"none"}}  to={"/products/`${e.id}`"}>
               <img style={{width:"100%", borderRadius:"12px"}} src={e.image}></img>
               <div style={{textDecoration:"none"}}>
               <p>{e.title}</p>
               <p>Brand : {e.brand} </p>
               <p>Category : {e.category}</p>
               <p>Price : Rs. {e.price} </p>
               </div>
             </Link>
            }</div>;
          })}
      </div>
    </>
  );
};
