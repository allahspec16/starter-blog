import React from "react";
import boat from '../Images/blog.png'
const Aticlehero = () => {
  return ( 
    <div className="section--container article-hero">
      <div>
        <div className="articlehero--flex">
          <p>January 16, 2024 in <span> #sustainability</span></p>
          <p>5 min read</p>
        </div>
        <p className="p1">
          Living Light: The Minimalist Lifestyle and its Environmental Impact
        </p>
        <p className="p">
          Explore the profound connection between embracing minimalism and reducing your environmental footprint, discovering how living light can lead to a more sustainable and fulfilling life.
        </p>
      </div>
      <div>
        <img src={boat}></img>
        <p className="p3">
          In a world drowning in excess, the minimalist lifestyle emerges as a beacon of simplicity. Minimalists consciously pare down possessions, focusing on what truly adds value to life.
        </p>
      </div>
      <div></div>
    </div>
   );
}
 
export default Aticlehero;