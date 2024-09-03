import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import Img1 from "../assets/post/esavert.png";



function Nav() {
  const [click, setClick] = useState(false);
  const  handleClick = () => setClick(!click);

  return (
    <>
      <header className='top-0 sticky z-50 shadow-lg'> 
      <nav className="p-8 md:p-10 h-[80px] bg-[#003b65]  flex justify-between items-center">

          <div className="text-2xl text-white flex flex-row gap-4 content-center justify-center">
          <Link to="/" >
            <div className="flex justify-center content-center items-center">
              <img className='w-20' src={Img1} alt="logo" />
              <h1 className='text-[32px] font-bold sm:text-4xl'>eSaver</h1>
            </div>
          </Link>
          </div>
          <ul className="hidden sm:flex gap-4 text-white text-xl">
            <li className='nav-item'>
              <Link to="/" activeClassName="active" className="nav-links" onClick={handleClick}>
                Home
              </Link>
            </li>
            {/* <li className='nav-item'>
              <NavLink to="/about" activeClassName="active" className="nav-links" onClick={handleClick}>
                About
              </NavLink>
            </li> */}
            <li className='nav-item'>
              <Link to="/demo" activeClassName="active" className="nav-links" onClick={handleClick}>
                Demo
              </Link>
            </li>
            <li className='nav-item'>
              <Link to="/career" activeClassName="active" className="nav-links" onClick={handleClick}>
                Career
              </Link>
            </li>
            <li className='nav-item'>
              <Link to="/products" activeClassName="active" className="nav-links" onClick={handleClick}>
                Products
              </Link>
            </li>
            <li className='nav-item'>
              <Link to="/login" activeClassName="active" className="nav-links" onClick={handleClick}>
                Login
              </Link>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>          
          </div>
      </nav>
      </header>
    </>
  )
}

export default Nav

// import "./navbar.scss"
//          <ul className={click ? "nav-menu active" : "nav-menu"}>




 
