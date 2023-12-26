import Navbar from "./navbar"
import Footer from "./footer"
import { useDispatch, useSelector } from "react-redux"
import { remove } from "../store/cartSlice";
export default function Bag(){
   const dispatch= useDispatch();
   const removeFromBag=(card)=>{
    dispatch(remove(card));
  }
   const productItems=useSelector(state=>state.cart)
   const productItemss=productItems.map((card)=>(
    <div className="text-centre">
    <div key={card.id} className="card bag-item col-md-3" style={{width: "18rem"}}>
        <h5 className="card-title">{card.category}</h5>
        <br></br>
    <img src={card.image}  className="card-img-top" alt="..."/>
    <div className="card-body h-10 innerdiv">
      <h5 className="card-title">{card.title}</h5>
      <h5 className="card-title">&#36;{card.price}</h5>
    

      <p className="card-text">{card.description}</p>
      <button onClick={()=>removeFromBag(card.id)} style={{width:"12rem"}} className="btn btn-primary button">remove from bag</button>
    </div>
  </div>
  </div>
))

    return <>
    <Navbar/>
   <div className="row">
  {productItemss}
   </div>
    <Footer/>
    </>
}