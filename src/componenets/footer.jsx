const Footer = () => {
  return ( 
    <footer className="section--container footer">
      <div className="footer-1">
        <div className="footer--info">
          <h2>Starter</h2>
          <p>
            This the was designed by 
            <a href=""> Lawal Kikelomo</a>.
          </p>
          <p>
            You can download the figma file from 
            <a href=""> dribble</a>
          </p>
        </div>
        <div>
          <ul>
            <li><a href="">Mastodon</a></li>
            <li><a href="">Dribble</a></li>
            <li><a href="">GitHuB</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-2">
        <div> 
          <p>© 2024 Allahspec</p>
        </div>
        <div>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>
      </div>
    </footer>
   );
}
 
export default Footer;