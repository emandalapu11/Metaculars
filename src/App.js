import React from "react";
import './index.css';
import Link from './components/Link';
import Popular from './components/Popular';
import Example from "./components/Example";
function App() {
  return (
    <React.Fragment>
       <div className="container-fluid">
       <div className="row bg-light">
       <div className="col-sm-12"> 
       <div className="card">
       <div className="card-body">
       <Example/>
       <Link/>
       <Popular/>
       </div>
       </div>
       </div>
       </div>
       </div>
    </React.Fragment>
  );
}
export default App;
