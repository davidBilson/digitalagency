import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import {MdOutlineWebhook} from 'react-icons/md'
import './NavBar.css'
import { useState } from 'react'
// import Logo from '../../assets/logo.png'

const NavBar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <header className='nav-header'>
    <nav className="navigation">
    <a href='' className="brand-name">
            <span>
            {/* <img src={Logo} alt="" className="logo-img" /> */}
            TaySolutions <MdOutlineWebhook />
            </span>
    </a>
    <button className="hamburger" onClick={() => setIsNavExpanded(!isNavExpanded)}>
      {isNavExpanded ? <AiOutlineClose /> : <AiOutlineMenu />}
    </button>
    <div
      className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
      <ul>
        <li>
          <a href='' onClick={() => {setIsNavExpanded(!isNavExpanded)}}>About Us</a>
        </li>
        <li>
          <a href='' onClick={() => {setIsNavExpanded(!isNavExpanded)}}>Projects</a>
        </li>
        <li>
          <a  href='' onClick={() => {setIsNavExpanded(!isNavExpanded)}}>Services</a>
        </li>
        <li>
          <a  href='#' onClick={() => {setIsNavExpanded(!isNavExpanded)}}>Contact Us</a>
        </li>
      </ul>
    </div>
  </nav>
  </header>
  )
}
export default NavBar