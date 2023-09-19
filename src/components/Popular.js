import React from 'react'
import Projects from './Projects'
import Datasets from './Datasets'


const Popular = () => {
  return (
    <>
               <div className="row">          
      <div className="col-sm-12 ">
    <div className="card">
     <div className="card-body bg-light my-5">
            <h1>Popular</h1>
            <p>These datasets and projects are popular within your organisation</p>
            <div>
               <ul class="nav nav-tabs mb-4 " id="ex1" role="tablist">
     <li class="nav-item" role="presentation">
   <a
  class="nav-link active"
  id="ex1-tab-1"
  data-bs-toggle="tab"
  href="#ex1-tabs-1"
  role="tab"
    aria-controls="ex1-tabs-1"
   aria-selected="true"
   >Projects</a >
   </li>
  <li class="nav-item" role="presentation">
    <a
   class="nav-link"
    id="ex1-tab-2"
   data-bs-toggle="tab"
   href="#ex1-tabs-2"
  role="tab"
   aria-controls="ex1-tabs-2"
   aria-selected="false" >Datasets</a>
    </li>     </ul></div>
    <div class="tab-content" id="ex1-content">
    <div
    class="tab-pane fade show active"
    id="ex1-tabs-1"
    role="tabpanel"
     aria-labelledby="ex1-tab-1">
     <Projects/></div></div></div>
 <div class="tab-pane fade show active" id="ex1-tabs-2" role="tabpanel" aria-labelledby="ex1-tab-2">
  <Datasets/>
  </div>
   </div></div></div>
    </>
  )
}

export default Popular
