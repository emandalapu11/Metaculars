import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
const Mobilecart=()=>{
    const navigate=useNavigate();
    const clickHandler=()=>{
      navigate('/link',{replace:true});
    }
    let[mobile,setMobile]=useState(
        {
         brand:"Redmi",
         color:"black",
         price:2000
      })
      let Updateprice=(value)=>{
        setMobile((prevstate)=>{
            return {
                ...prevstate,
                price:value
            }

        })

      }
      return(
        <>
        <pre>MobileData:{JSON.stringify(mobile)}</pre>
        <div className="container">
            <div className="row">
                <div className="col-sm-3">
                    <div className="card">
                        <div className="cart-body">
                        <ul className="list-group">
                            <li className="list-group items">
                                Brand:{mobile.brand}
                            </li>
                            <li className="list-group items">
                             color:{mobile.color}
                               </li>
                               <li className="list-group items">
                               price:{mobile.price}
                                     </li>
                        </ul>
<button onClick={()=>Updateprice(5000)} className="btn btn-primary">Increment</button>
<button onClick={()=>Updateprice(1000)} className="btn btn-primary">Decrement</button>

                        </div>
                    </div>
                </div>
            </div>
            <button onClick={clickHandler}>go to link</button>
        </div>
     </>
    )
}
export default Mobilecart;


