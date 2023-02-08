import React from 'react'
import {NavLink} from 'react-router-dom';
import BtnMode from '../btnMode/BtnMode';
import './styles.css';


function NavBar() {
  const activeNav = "nav-list__link nav-list__link--active"
  const narmalNav = "nav-list__link"
  return (
    <>
      <nav className="nav">
        <div className="container">
          <div className="nav-row">
            <NavLink to='/' className="logo">
              <strong>Freelancer</strong> portfolio
            </NavLink>

            <BtnMode />

            <ul className="nav-list">
              <li className="nav-list__item">
                <NavLink to='/' className={({isActive}) => isActive ? activeNav : narmalNav} >Home</NavLink>
              </li>
              <li className="nav-list__item">
                <NavLink to='/projects' className={({isActive}) => isActive ? activeNav : narmalNav}>Projects</NavLink>
              </li>
              <li className="nav-list__item">
                <NavLink to='/contacts' className={({isActive}) => isActive ? activeNav : narmalNav} >Contacts</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar
