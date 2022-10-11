import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
function Card (props) {
    return <>
 <div className="col-lg-4">
     <div className="card mb-5 mb-lg-0">
         <div className="card-body">
         <h5 class="card-title text-muted text-uppercase text-center">{props.data.plan}</h5>             
         <h6 class="card-price text-center">{props.data.price}</h6>               
         <hr/>
         <ul className="fa-ul">
             {
    props.data.features.map((feature) =>{
       return <li className={feature.isEnabled ? "" : "text-muted"}>               
    <span className="fa-li">
         {feature.isEnabled ?  <CheckIcon/> : <ClearIcon/>}    
        
        </span>{feature.name}             

    </li> 
    })
   }
 </ul>
 <div></div>
 <div class="d-flex justify-content-center" ><button href="#" className="btn btn-block btn-primary text-uppercase d-inline-flex ">Button</button></div>
         </div>
     </div>
 </div>
    </>
    
  }

  export default Card;