import React from 'react'
import {Routes,Route} from "react-router-dom";
import Navbar from "./Navbar";
import Myprojects from './Myprojects';
import Teamprojects from "./Teamprojects";
import ReadMore from "./ReadMore";
import Counter from './Counter';
import Mobilecart from './Mobilecart';
import Registration from './Registration';
import Projects from './Projects';
import ReadMoreLess from './ReadMoreLess ';
import Popular from './Popular';
const Link = () => {
  return (
    <>
      <div className="row">
      <div className="col-sm-6">
      <div className="card bg-light shadow-sm mt-5">
      <div className="card-body ">
      <h2 className='text-dark,fw-bold'>Welcome,John</h2>
      <h6 className='text-dark'>What are you looking to do today?</h6>
      <div className="card-body bg-light shadow-sm">
       <ion-icon name="search-outline">
        </ion-icon> Search for Files,Projects,Datasets,etc.
      </div>
      <div>
      <button type="button" class="btn btn-primary m-2" data-bs-toggle="modal" 
      data-bs-target="#myModal">New Project  +<ion-icon name="add-outline m-3"></ion-icon></button>
     <button type="button" class="btn btn-dark m-2" data-bs-toggle="modal" 
      data-bs-target="#myModal">New Dataset   +<ion-icon name="add-outline m-3"></ion-icon></button>
        <div class="modal" id="myModal">
     <div class="modal-dialog">
    <div class="modal-content">
       <div class="modal-header">
     <h4 class="modal-title">New Project</h4>
    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
     </div>
    <div class="modal-body">
    Project Model
   </div>
    <div class="modal-footer">
     <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
   </div></div>
     </div>
       </div></div></div></div></div>
           
    <div className="col-sm-3">
     <div className="card bg-light shadow-sm mt-5">
    <div className="card-body">
    <div className="card-body bg-light shadow-sm">
      <h5 className='text-black fw-bold'>My Active Projects</h5></div>
     <div>
    <ReadMoreLess/>
   <Routes>
     <Route path={'/'} element={<Registration/>}/>
  <Route path={"/mobilecart"} element={<Mobilecart/>}/>
   <Route path={"/readmore"} element={<ReadMore/>}/>
     <Route path={"/counter"} element={<Counter/>}/>
      </Routes>
    </div></div></div></div>
    
  <div className="col-sm-3">
    <div className="card bg-light shadow-sm mt-5">
      <div className="card-body">
      <div className="card-body bg-light shadow-sm">
  <h5 className=" fw-bold">Team's Active Projects</h5></div>
  <div>
    <Navbar/>
  <Routes >
    <Route path={'/'} element={<Myprojects/>}/>
 <Route path={"/teamprojects"} element={<Teamprojects/>}/>
  <Route path={"/projects"} element={<Projects/>}/>
    <Route path={"/popular"} element={<Popular/>}/>

</Routes>
  </div></div></div></div></div>
          </>
  )
}

export default Link
