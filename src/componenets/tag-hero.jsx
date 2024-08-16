import React from "react";
import sustainability from '../Images/sustainability.png'
import simplicity from '../Images/simplicity.png'
import lifestyle from '../Images/lifestyle.png'
import earth from '../Images/earth.png'
import environment from '../Images/environment.png'
import ecology from '../Images/ecology.png'
import commerce from '../Images/commerce.png'
import circular from '../Images/circular.png'
import climate from '../Images/climate.png'
import global from '../Images/global.png'
import energy from '../Images/energy.png'

const Taghero = () => {
  return ( 
    <div className="section--container tag">
      <div>
        <img src={sustainability}></img>
        <h3>#sustainability</h3>
        <p>4 posts</p>
      </div>
      <div>
        <img src={simplicity}></img>
        <h3>#simplicity</h3>
        <p>14 posts</p>
      </div>
      <div>
        <img src={lifestyle}></img>
        <h3>#lifestyle</h3>
        <p>9 posts</p>
      </div>
      <div>
        <img src={earth}></img>
        <h3>#earth</h3>
        <p>12 posts</p>
      </div>
      <div>
        <img src={environment}></img>
        <h3>#environment</h3>
        <p>2 posts</p>
      </div>
      <div>
        <img src={ecology}></img>
        <h3>#ecology</h3>
        <p>7 posts</p>
      </div>
      <div>
        <img src={commerce}></img>
        <h3>#commerce</h3>
        <p>1 post</p>
      </div>
      <div>
        <img src={circular}></img>
        <h3>#circular</h3>
        <p>3 posts</p>
      </div>
      <div>
        <img src={climate}></img>
        <h3>#climate</h3>
        <p>10 posts</p>
      </div>
      <div>
        <img src={global}></img>
        <h3>#global</h3>
        <p>0 post</p>
      </div>
      <div>
        <img src={energy}></img>
        <h3>#energy</h3>
        <p>6 posts</p>
      </div>
    </div>
   );
}
 
export default Taghero;