import React from 'react'
import Logo from '../../public/assets/icons/icon-logo.svg'

const Header = () => {
  return (
    <div className='h-[4.813rem] flex items-center'>
        <div className="logo flex gap-2 items-center">
            <img src={Logo} alt="" className="" />
            <h3 className="font-bold">Destinize</h3>
        </div>
        <div className="search">
            <input type="text" className="" />
        </div>
    </div>
  )
}

export default Header