import React, { useState } from 'react'
import Logo from '../assets/images/logo.svg'
import Menu from '../assets/icons/menu.svg'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Header = () => {

    const [toggle, setToggle] = useState(false)

    const closeModal = () =>{
        setToggle(!toggle)
    }

    console.log(toggle)
  return (
    <>
    <div className='md:shadow-md'>
        {/* Navbar starts here */}
        <nav className='flex justify-between item-center md:px-14 px-8 py-6 '>
            <div className='flex'>
                
                <div className='flex item-center z-[3000] md:mr-20'>
                    {/* Logo Here */}
                    <Link to={'/'} className="flex">
                        <img src={Logo} alt="" className='logo' />
                    </Link>
                </div> 

                <div className='md:flex z-[3000] item-center gap-x-8 hidden' style={{alignItems : 'center'}}>
                    {/* Header links */}
                    <Link to={'/markets'} className='btn-link'>Markets</Link>
                    <Link to={'/learn-with-omazoya'} className='btn-link'>Learn with us</Link>
                    <Link to={'/about'} className='btn-link'>About us</Link>
                    <Link to={'/quests'} className='btn-link'>Quests</Link>
                </div>
            </div>

            {/* cta buttons */}
            <div className='flex z-[3000]'>
                <Link to={'/login'} className="btn btn-secondary heading-six mr-4">Log in</Link>
                <Link to={'/signup'} className="btn btn-primary heading-six">Sign up</Link>
            </div>
        </nav>
        {/* navbar ends here */}
        <button className='ml-6 md:hidden z-[8000]' onClick={() => setToggle(true) } style={{marginTop : -40}}>
            <img src={Menu} alt="" />
        </button>
    </div>

    <Navbar toggle={toggle} closeModal={closeModal} />
    </>
  )
}

export default Header