import React,{useState} from 'react';
import {Link} from "react-router-dom";
function Navbar(){
    const [isReadMore, setIsReadMore] = useState(false);
    const toggleReadMoreLess = () => {
      setIsReadMore(!isReadMore);
    };
    return(
        <>
         <div>
   <div className='navBar'>
   <div className='myprojects mb-1 mt-1'>
       <Link to="/">Myprojects</Link>
   </div>
   <div className='teamprojects mb-1'>
       <Link to="/Teamprojects">Teamprojects</Link>
   </div>
   <div className='projects mb-1'>
 <Link to="/projects">Projects</Link>
</div>
   {isReadMore && (
    <div>
   <div className='popular-2'>
     <Link to="/popular">Popular</Link>
     </div></div>
   
   )}
<button className="bg-light text-primary border-0" onClick={toggleReadMoreLess}>
 {isReadMore ? "See Less ->" : "See More ->"}
   </button></div></div>
        
        </>
    )
    }
export default Navbar;