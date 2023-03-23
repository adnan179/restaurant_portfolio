import './footer.css';
import { logo } from '../../assests';
const Footer = ({handleChange}) =>{
  return(
    <div className='app__footer'>
      <div className='app__footer-logo'>
        <img src={logo} alt='logo'/>
      </div>
      <div className='app__footer-links'>
        <ul>
          <li><a href='#home'c className='p__opensans'>Home</a></li>
          <li><a href='#about'c className='p__opensans'>About us</a></li>
          <li><a href='#menu'c className='p__opensans'
            onClick={()=>{
              handleChange(true);
              window.scrollTo({top:0,left:0,behavior:'smooth'});
            }}
          >Menu</a></li>
          <li><a href='#reversations'c className='p__opensans'>Reservations</a></li>
          <li><a href='#order'c className='p__opensans'>Order</a></li>
        </ul>
      </div>
      <div className='app__footer-social'>
        <h2>Connect</h2>
        <ul>
        <li><a href='#insta'c className='p__opensans'>Instagram</a></li>
        <li><a href='#facebook'c className='p__opensans'>Facebook</a></li>
        <li><a href='#twit'c className='p__opensans'>Twitter</a></li>
        <li><a href='#telegram'c className='p__opensans'>Telegram</a></li>
        </ul>
      </div>
      <div className='app__footer-contact'>
        <h2>Contact</h2>
        <ul>
          <li>2395 Maldove way,<br/>
          Chicago, Illnois</li>
          <li><a href='#phone'c className='p__opensans'>(629)-243-6287</a></li>
          <li><a href='#email'c className='p__opensans'>@infolittlelemon.com</a></li>
        </ul>
      </div>
    </div>
  )
}
export default Footer;