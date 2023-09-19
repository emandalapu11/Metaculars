import React, { useState } from "react";
import {Link} from "react-router-dom"
function ReadMoreLess() {
  const [isReadMore, setIsReadMore] = useState(false);

  const toggleReadMoreLess = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <>
    <div>
     <div className='navBar'>
     <div className='registration mb-1 mt-1'>
         <Link to="/">Registration</Link>
     </div>
     <div className='mobilecart mb-1'>
         <Link to="/mobilecart">Mobilecart</Link>
     </div>
     <div className='readmore mb-1'>
   <Link to="/readmore">ReadMore</Link>
  </div>
     {isReadMore && (
      <div>
     <div className='counter mb-2'>
       <Link to="/counter">Counter</Link>
       </div></div>
     
     )}
 <button className="bg-light text-primary border-0" onClick={toggleReadMoreLess}>
   {isReadMore ? "See Less ->" : "See More ->"}
     </button></div></div>
  </>
  )
}

export default ReadMoreLess;