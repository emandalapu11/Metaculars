import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
const Registration=()=>{
    const navigate=useNavigate();
    const clickHandler=()=>{
      navigate('/link',{replace:true});
    }
    let[user,setUser]=useState([
        {
            username:"",
            email:"",
            password:"",
            gender:"",
            designation:"",
            terms:false,
        }
    ])
    let Updateuser=(event)=>{
            setUser((prevstate)=>{
                return{
                    ...prevstate,
                    [event.target.name]:event.target.type ==="checkbox"?event.target.checked:event.target.value
                }})
            }
          let checkforEmptyFields=()=>{
            for(let key of Object.keys(user)){
                if((key ==="terms" && user[key]===false) || user[key]===""){
                    return true;
                }
            }
            return false;
          }
     let submitRegister=(event)=>{
        event.preventDefault();
        console.log(user);
     }       
         return(
        <>
        <pre>{JSON.stringify(user)}</pre>
        <div className="container">
            <div classsName="row">
                <div className="col-sm-5">
                    <div className="card">
                        <div className="card-header">
                            <h1>Registration Form</h1>
                        </div>
                        <div className="card-body">
                            <form onSubmit={e=>submitRegister(e)}>
                            <div className="mb-2">
                               
                               
                                <input
                                 value={user.username}
                                 name={"username"}
                                onChange={e=>Updateuser(e)} type="text" className="form-control" placeholder="username"/>
                            </div>
                            <div class="mb-2">  
                           
                           
                            <input 
                             value={user.email}
                             name={"email"}
                            onChange={e=>Updateuser(e)} type="email" class="form-control" placeholder="email"/></div>
     <div className="mb-2">  
         <input
          value={user.password}
    name={"password"}  onChange={e=>Updateuser(e)} type="password" class="form-control" placeholder="password"/></div>
         <div className="mb-2">
         <select  value={user.Designation}
  name={"Designation"}  onChange={e=>Updateuser(e)} className="form-control">
     <option value="">Designation</option>
             <option value="HR">HR</option>
             <option value="Manager">Manager</option>4
         </select></div>
         <div className="mb-2">
      <textarea 
         value={user.textarea}
         name={"textarea"}rows="3"  onChange={e=>Updateuser(e)} className="form-control" placeholder="Biopic"></textarea>
         </div>
         <div className="mb-2">
       <label>Gender:</label>
           <label className="form-label">Male</label>
             <input
               value={"Male"}
               name={"Gender"}   onChange={e=>Updateuser(e)} type="radio" classsName="form-check-input"/>
         <label className="form-label">Female</label>
              <input
               value={"Female"}
               name={"Gender"}   onChange={e=>Updateuser(e)} type="radio" className="form-check-input"/>
         </div>
         <div className="mb-2">
         
        <input 
        name={"terms"}
        type="checkbox"  onChange={e=>Updateuser(e)} className="form-check-input"/>
        <label className="form-label">Accepts Terms and conditions</label>

         </div>
         <div className="mb-2">
             <input disabled={checkforEmptyFields()}type="submit" value="Register" className="btn btn-primary"/>
             
         </div></form>
                 <div>

                        </div>
                    </div>
                </div></div></div>
            <button onClick={clickHandler}>go to link</button>
        </div>
        
    
        </>
    )
}
export default Registration;
