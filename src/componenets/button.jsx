import React from "react";
import {Link} from "react-router-dom";

const Button = () => {
  return ( 
    <div className="section--container button">
      <button>
       <Link to='/article'>View More</Link>
      </button>
    </div>
   );
}
 
export default Button;