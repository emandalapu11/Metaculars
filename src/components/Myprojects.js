  import React from "react";
  import { useNavigate } from "react-router-dom";

  const MyProjects=()=>{
    const navigate=useNavigate();
    const clickHandler=()=>{
      navigate('/link',{replace:true});
    }
    return(
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col">

    <h1 className=" fontsize-md text-decoration-none text-success fw-bold">My Active Projects</h1>
    <p>This is my active project</p>
    </div></div>
    <button onClick={clickHandler}>go to link</button>
    </div>
    
    </React.Fragment>
    )
  }
  export default MyProjects;
