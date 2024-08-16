import React from "react";
import img from '../Images/about.png'
const Abouthero = () => {
  return ( 
    <div className="section--container about">
      <div>
        <h2>About Starter</h2>
        <img src={img}></img>
      </div>
      <div>
        <p>
          Starter is a “starter” theme designed for simplicity and minimalism. It is particularly suitable for personal blogs. It is designed by <span>Lawal Kikelomo</span>. The figma design file available to download for free 🤩 under <span>CodeLab</span>
        </p>
        <p className="about-p2">
          I plan to implement this theme in a variety of site generators and content management systems. My first priorities are enhance, 11ty, astro and ghost (CMS). In the future, there will also be Hugo, Solidstart, Hono, Deno Fresh, Vitepress and SvelteKit versions. Codes for every implementation will be available on my github.
        </p>
        <p className="about-p3">
          Contents in this site, other than this page and external links are dummy and generated by AI. They don’t serve any purpose but being placeholders. All images are downloaded from Unsplash.
        </p>
      </div>
    </div>
   );
}
 
export default Abouthero;