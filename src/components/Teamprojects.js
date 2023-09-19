import React from "react";
import { useNavigate } from "react-router-dom";
function Teamprojects(props){
  const navigate=useNavigate();
  const clickHandler=()=>{
    navigate('/link',{replace:true});
  }
  return(
  <React.Fragment>
  <h1 className="text-black fontsize-md">My TeamProjects</h1>
  <p>This is my active project
  </p>
  <button onClick={clickHandler}>go to link</button>
  </React.Fragment>
  )
}
export default Teamprojects;