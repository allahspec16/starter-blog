import moon from '../images/icon-moon.svg';
import sun from '../images/icon-sun.svg';
const Toggle = (props) => {
  return ( 
    <div className='toggle-container' onClick={props.handleChange}>
      <img src={props.isChecked? sun :moon}></img>
    </div>
   );
}
 
export default Toggle;