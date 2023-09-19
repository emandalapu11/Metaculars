import React from "react";
import { useNavigate } from "react-router-dom";
const ReadMore=(props)=>{
  const navigate=useNavigate();
  const clickHandler=()=>{
    navigate('/link',{replace:true});
  }

return(
  <React.Fragment>
  <h1 className="text-black fontsize-md">Interesting concepts</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  <button onClick={clickHandler}>go to link</button>
  </React.Fragment>
  )
 }
 export default ReadMore;