import React from 'react'
import AboutBg from '../assets/images/about-bg.svg'
const About = () => {
  return (
    <>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 container mx-auto pt-24 md:pt-0 px-0 md:px-4 about-header">
          <div>
            {/* bread crumb goes here */}
            <div className='mb-4 px-4 md:px-0 pt-16'>About us / Careers</div>

            <h1 className="big-display mb-4 px-4 md:px-0 uppercase">
                About us
            </h1>

            <div style={{backgroundColor : '#3E3D3D'}}>
            <p className=" px-4 md:px-0 base-text mb-4 leading-8 font-regular">
            The Omayoza Investment Platform is a web-based platform that enables users to make investments in the Forex market automatically. Omayoza is a fully functional, user-friendly, and secure platform that meets the needs and expectations of users, providing a valuable tool for investors to achieve their financial goals.
            </p>

            <p className="base-text px-4 md:px-0 mb-4 leading-8 font-regular">
            The platform aims to provide a user-friendly and secure platform that enables users to invest in the Forex market automatically. The platform will provide a valuable tool for traders who want to monitor their gains and losses and achieve their financial goals, while also generating revenue for the business through transaction fees and other revenue streams.
            <br /> It is designed to meet the need for:
            </p>


            <ul className='mt-4 md:px-0 leading-8 font-regular px-8' style={{listStyle : 'disc'}}>
              <li>Security and Reliability</li>
              <li>Automated Trading Experience</li>
              <li>Risk Management</li>
            </ul>
            
            <button className="btn btn-primary mt-8 mb-16 md:ml-0 ml-4">
              Sign up
            </button>
            </div>
            
          </div>
          <div className='about-bg hidden order-first md:order-last md:block bg-fixed bg-cover bg-no-repeat'>
            
          </div>
        </div>
      </section>
    </>
  )
}

export default About