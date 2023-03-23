import './navbar.css';
import { logo } from '../../assests';
import {GiHamburgerMenu} from 'react-icons/gi';
import { useState } from 'react';
// import {Home,About,Menupage,} from '../../components;'
const Navbar = ({handleChange})=>{
  const [toggleMenu,setToggleMenu] = useState(false);
  return(
    <nav className='app__Navbar'>
      <div className='app__Navbar-logo'>
        <img src={logo} alt='logo' />
      </div>
      <ul className='app__Navbar-links'>
        <li className='p__opensans'><a href='#Home'
          onClick={()=>{
            window.scrollTo({top:0,left:0,behavior:'smooth'});
          }}
        >Home</a></li>
        <li className='p__opensans'><a href='#About'
          onClick={()=>{
            window.scrollTo({top:616,left:0,behavior:'smooth'});
          }}
        >About us</a></li>
        <li className='p__opensans'><a href='#Menupage'
          onClick={()=>{
            handleChange(true)
            window.scrollTo({top:0,left:0,behavior:'smooth'});
          }}
        >Menu</a></li>
        <li className='p__opensans'><a href='#reversations'>Reservations</a></li>
        <li className='p__opensans'><a href='#order'>Order</a></li>
      </ul>
       <div className='app__Navbar-login'>
        <a href='#login' className='p__opensans'>Log In/Register</a>
        <div/>
        <a href='/'className='p__opensans'>Book table</a>
      </div> 
      <div className='app__Navbar-smallscreen'>
        <GiHamburgerMenu color='yellow' fontSize={27} onClick={()=>{setToggleMenu(!toggleMenu)}}/>
        {toggleMenu &&(
          <div className='=app__Navbar-smallscreen_overlay flex__center slide-bottom'>
            <ul className='app__Navbar-smallscreen_links'>
              <li><a href='#Home' onClick={()=>setToggleMenu(false)}>Home</a></li>
              <li><a href='#About' onClick={()=>setToggleMenu(false)}>About us</a></li>
              <li><a href='#Menu' onClick={()=>setToggleMenu(false)}>Menu</a></li>
              <li><a href='#reservations' onClick={()=>setToggleMenu(false)}>Reversations</a></li>
              <li><a href='#order' onClick={()=>setToggleMenu(false)}>Order</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}
export default Navbar;