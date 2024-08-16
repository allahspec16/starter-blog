import leaf from '../Images/leaf.png'
import road from '../Images/road.png'
import flower from '../Images/flower.png'
import boat from '../Images/boat.png'
import featured1 from '../Images/featured1.png'
import featured2 from '../Images/featured2.png'
import featured3 from '../Images/featured3.png'
import featured4 from '../Images/featured4.png'
import featured5 from '../Images/featured5.png'
const Blogs = () => {
  return ( 
    <div className='section--container blog-section'>
      <span className='span-1'>
        Recent Publications
      </span>
      <div className='blog-flex'>
        <div>
          <p className='span'>2 Feb, 2024 </p>
          <p className='span'>.</p>
          <p className='span'>#minimalism</p>
          <p>
            Living Light: The Minimalist Lifestyle and its Environmental Impact
          </p>
        </div>
        <div>
          <img src={leaf}></img>
        </div>
      </div>
      <div className='blog-flex'>
        <div>
          <p className='span'>19 July, 2024 </p>
          <p className='span'>.</p>
          <p className='span'>#minimalism</p>
          <p>Elevating Your Style with Minimal Environmental Footprint</p>
        </div>
        <div>
          <img src={road}></img>
        </div>
      </div>
      <div className='blog-flex'>
        <div>
          <p className='span'>6 Nov, 2024 </p>
          <p className='span'>.</p>
          <p className='span'>#circular</p>
          <p>Designing Tranquility: How Minimalist Spaces Support Eco-Friendly Living</p>
        </div>
        <div>
          <img src={flower}></img>
        </div>
      </div>
      <div className='blog-flex'>
        <div>
          <p className='span'>9 April, 2024 </p>
          <p className='span'>.</p>
          <p className='span'>#minimalist</p>
          <p>Wander Wisely: Sustainable Travel Tips for the Minimalist Explorer</p>
        </div>
        <div>
          <img src={boat}></img>
        </div>
      </div>

      <div className='blog-flex'>
        <div>
          <p className='span'>28 Mar, 2024 </p>
          <p className='span'>.</p>
          <p className='span'>#ecology</p>
          <p>Capsule Closets: Elevating Your Style with Minimal Environmental Footprint</p>
        </div>
        <div>
          <img src={featured1}></img>
        </div>
      </div>
      <div className='blog-flex'>
        <div>
          <p className='span'>12 Dec, 2024 </p>
          <p className='span'>.</p>
          <p className='span'>#sustainability</p>
          <p>Simplifying Life for a Balanced, Eco-Conscious Tomorrow</p>
        </div>
        <div>
          <img src={featured2}></img>
        </div>
      </div>
      <div className='blog-flex'>
        <div>
          <p className='span'>9 June, 2024 </p>
          <p className='span'>.</p>
          <p className='span'>#global</p>
          <p>Simplifying Life for a Balanced, Eco-Conscious Tomorrow</p>
        </div>
        <div>
          <img src={featured3}></img>
        </div>
      </div>
      <div className='blog-flex'>
        <div>
          <p className='span'>27 April, 2024 </p>
          <p className='span'>.</p>
          <p className='span'>#earth</p>
          <p>Redefining Success in a Earth-Friendly Life</p>
        </div>
        <div>
          <img src={featured4}></img>
        </div>
      </div>
      <div className='blog-flex'>
        <div>
          <p className='span'>16 Jan, 2024 </p>
          <p className='span'>.</p>
          <p className='span'>#environment</p>
          <p>Zero-Waste Living</p>
        </div>
        <div>
          <img src={featured5}></img>
        </div>
      </div>
    </div>
   );
}
 
export default Blogs;