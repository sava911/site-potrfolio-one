import React from 'react'
import gitImg from './../../img/icons/gitHub-black.svg'
import './styles.css';


function BtnGIt({Link}) {
  return (
    <>
      <a href={Link} target='_blank' rel='noreferrer' className="btn-outline">
        <img src={gitImg} alt="" />
        GitHub repo
      </a>

    </>
  )
}

export default BtnGIt