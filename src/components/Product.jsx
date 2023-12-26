import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";


export default function Product(){
  const dispatch=useDispatch();
    let[products,getProducts]=useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(result=>getProducts(result))
      },[]);
  const addToCart=(card)=>{
  dispatch(add(card));
 
  }
const product=products.map((card)=>(
    <div key={card.id} className="card bag-item col-md-3" style={{width: "18rem"}}>
        <h5 className="card-title">{card.category}</h5>
        <br></br>
    <img src={card.image}  className="card-img-top" alt="..."/>
    <div className="card-body h-10 innerdiv">
      <h5 className="card-title">{card.title}</h5>
      <h5 className="card-title">&#36;{card.price}</h5>
    

      <p className="card-text">{card.description}</p>
      <button onClick={()=>addToCart(card)} style={{width:"12rem"}} className="btn btn-primary button">Add to bag</button>
    </div>
  </div>
))
    return <>
    {<div className="row columntop">
    <div className="row column">
        {product}
        </div>
        </div>}
        
      

    </>
}