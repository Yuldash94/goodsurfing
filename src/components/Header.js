import React from 'react'
import {BsHeartFill, BsEnvelopeFill} from 'react-icons/bs'
import {MdArrowDropDown} from 'react-icons/md'
import './Header.css'

function Header() {
  return (
    <div className='header'>
        <div className='logo'>
            <img src="./img/logo-1.png" alt='logo'></img>
            <img src='./img/logo.png' alt='logo'></img>
            <h3>RU</h3>
            <MdArrowDropDown/> 
        </div>
        <div className='header_inner'>
          <div className='vulcan'>
              <div className='vulcan_logo'></div>
              <h3>Природный парк "Вулканы Камчатки"</h3>
          </div>
          <div className='account'>
            <BsHeartFill/>
            <BsEnvelopeFill/>
            <div className='account_profile'>
                <h3>Владислав</h3>
                <div className='profile_avatar'></div>
                <MdArrowDropDown/>  
            </div>
          </div>
        </div>
    </div>
  )
}

export default Header