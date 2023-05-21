import React, { useState } from 'react'
import Logo from '../assets/images/logo.svg'
import Close from '../assets/icons/close.svg'
import { Link } from 'react-router-dom'

const Navbar = ({toggle, closeModal}) => {

  return (
    <>
        {toggle && (
            <div className='fixed h-full w-full z-[6000] overlay bg-black opacity-90 top-0' style={{backgroundColor : '#3E3D3D'}}> 
                <div className='bg-black opacity-100 md:hidden text-white w-fit py-10 px-8'>
                    <div className='flex mb-12 gap-x-8'>
                    
                        <div className='flex item-center z-[3000] md:mr-20'>
                            {/* Logo Here */}
                            <Link to={'/'} className="flex">
                                <img src={Logo} alt="" className='logo' />
                            </Link>
                        </div> 

                        <button onClick={() => closeModal()}>
                            <img src={Close} alt="" />
                        </button>
                        
                    </div>

                    <ul className='block gap-x-8 leading-10'>
                        {/* Header links */}
                        <li><Link onClick={() => closeModal()} to={'/markets'} className='btn-link'>Markets</Link></li>
                        <li><Link onClick={() => closeModal()} to={'/learn-with-omazoya'} className='btn-link'>Learn with us</Link></li>
                        <li><Link onClick={() => closeModal()} to={'/about'} className='btn-link'>About us</Link></li>
                        <li><Link onClick={() => closeModal()} to={'/quests'} className='btn-link'>Quests</Link></li>
                    </ul>
                
                </div>
            </div>
        )}
    </>
  )
}

export default Navbar