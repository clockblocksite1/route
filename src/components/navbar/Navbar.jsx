import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoHome } from "react-icons/io5";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { GrCatalog } from "react-icons/gr";
import { IoSettingsSharp } from "react-icons/io5";
import "./navbar.scss";

function Navbar({ additionalClass }) {
  const location = useLocation(); 

  return (
    <div className={`navbar ${additionalClass}`}>
      <div className='top'>
        <span className='logo'>Disprime</span>
      </div>
    
      <div className='center'>
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}><span><IoHome />Главная</span></Link>
        <Link to="/new" className={location.pathname === '/new' ? 'active' : ''}><span><HiOutlineQuestionMarkCircle />Условия</span></Link>
        <Link to="/single" className={location.pathname === '/single' ? 'active' : ''}><span><GrCatalog />Каталог</span></Link>
        <Link to="/row" className={location.pathname === '/row' ? 'active' : ''}><span><IoSettingsSharp />Настройки</span></Link>
      </div>
    </div>
  );
}

export default Navbar;