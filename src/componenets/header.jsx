import React from "react";
import { NavLink, Link } from "react-router-dom";
import Toggle from './toggle'

const Header = ({isDark, setIsDark}) => {
  return ( 
    <div className="header" >
      <Link to='/' className="no-underline">
        <p className="no-underline">Starter</p>
      </Link>
      <div className="h-link">
          <ul>
            <li>
              <NavLink to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to ="/blog">
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink to="/tag">
                Tags
              </NavLink>
            </li>
            <li>
              <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)}/>
            </li>
          </ul>
        </div>
    </div>
   );
}
 
export default Header;