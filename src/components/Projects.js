import React from "react";
import SeeMoreLess from "./SeeMoreLess";
 function Projects(){
  return(
  <React.Fragment>
      <div className="row">
<div className="col-sm-3"> 
  <div className="card">
  <div className="card-body shadow sm-1 ">
  <h4 className="shadow sm-1">Project name</h4>
 <div>
<span class="badge rounded-pill bg-primary my-2">Fraud Detection</span></div>
<SeeMoreLess/>
 </div></div></div>
<div className="col-sm-3">
<div className="card">
<div className="card-body shadow sm-2">
<h4 className="shadow sm-2">Project name</h4>
<div>
 <span class=" badge rounded-pill bg-primary my-2">Fraud Detection</span></div>
 <SeeMoreLess/>
           </div></div></div>
           <div className="col-sm-3"> 
 <div className="card">
   <div className="card-body shadow  sm-2">
     <h4 className="shadow sm-2">Project name</h4>
  <div>
  <span class="badge rounded-pill bg-primary my-2">Fraud Detection</span></div>
   <SeeMoreLess/>
    </div></div></div>
    <div className="col-sm-3"> 
   <div className="card">
 <div className="card-body  shadow sm-2">
 <h4 className="shadow sm-2">Project name</h4>
     <div>
     <span class="badge rounded-pill bg-primary my-2">Fraud Detection</span></div>
   <SeeMoreLess/>
 </div></div></div></div>
   </React.Fragment>
    )
 }
 export default Projects;