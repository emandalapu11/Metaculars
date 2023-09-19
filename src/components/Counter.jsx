import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
const Counter=()=>{
    const navigate=useNavigate();
    const clickHandler=()=>{
      navigate('/link',{replace:true});
    }
    let[counter,setCounter]=useState(50);
    let incrcounter=()=>{
        setCounter((prevstate)=>{
            return prevstate+1;
        })
    }
    let decrcounter=()=>{
        setCounter((prevstate)=>{
            return prevstate-1;
        })
    }
    let incrcounterBy=(value)=>{
        setCounter((prevstate)=>{
            return prevstate+value;
        })
    }
    let decrcounterBy=(value)=>{
        setCounter((prevstate)=>{
            return prevstate-value;
        })
    }
    return(
     <>
     <pre>state:{counter}</pre>
     <div className="container">
        <div className="row">
            <div className="card">
                <div className="card-body">
                        <h1>{counter}</h1>
                        <button onClick={incrcounter} className="btn btn-primary m-2">Increment</button>
                        <button onClick={decrcounter} className="btn btn-primary m-2">Decrement</button>
                        <button onClick={()=>incrcounterBy(5)} className="btn btn-primary m-2">IncrementBy5</button>
                        <button onClick={()=>decrcounterBy(5)} className="btn btn-primary m-2">Decrementby5</button>
                    </div>
                </div>
            </div>
            <button onClick={clickHandler}>go to link</button>
        </div>
    


     </>
    )
}
export default  Counter;