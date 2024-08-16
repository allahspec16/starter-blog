import landing from '../Images/landing.png';

const Hero = () => {
  return ( 
    <div className='section--container'>
      <div className='hero-section'>
        <p className='p1'>
          Starter - a Minimalist Personal Blog Template.
        </p>
        <p>
          "Starter" is a well starter theme designed by Lawal Kikelomo for Ghost (CMS), 11ty, enhance, astro and many other site generators.
        </p>
        <img src={landing}></img>
        <span className='img-text'>
          Exploring the mountains in Indonesia - Unsplash
        </span>
      </div>
    </div>
   );
}
 
export default Hero;