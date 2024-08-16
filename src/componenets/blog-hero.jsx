import img from '../Images/blog.png'
const Bloghero = () => {
  return ( 
    <div className="section--container">
      <div className="hero-section">
        <p className='p1'>
          Living Light: The Minimalist Lifestyle and its Environmental Impact
        </p>
        <p>
          Explore the profound connection between embracing minimalism and reducing your environmental footprint, discovering how living light can lead to a more sustainable and fulfilling life.
        </p>
        <img src={img}></img>
        <span className='img-text'>
          Exploring the mountains in Indonesia - Unsplash
        </span>
      </div>
    </div>
   );
}
 
export default Bloghero;