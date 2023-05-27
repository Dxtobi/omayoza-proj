import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer px-10 md:px-10 py-14'>
            <div >
                <div className="mx-auto mb-40">
                    <h6 className="heading-six mb-12 w-1/2">
                        So which adventurer are you? Whether you're just starting out or you're a seasoned explorer, we've got a user class that's just right for you. Join us today and let's start blazing trails together!
                    </h6>
                    <button className="btn btn-primary">Invent with us now</button>
                </div>
                <div className='grid md:grid-cols-5 grid-cols-2 md:gap-8 gap-4'>
                    <div className="footer-group">
                        <h5 className="heading-five font-bold mb-4">
                            About
                        </h5>

                        <ul className="footer-links">
                            <li><Link to={''} className='btn-link'>About</Link></li>
                            <li><Link to={''} className='btn-link'>Omayoza News</Link></li>
                            <li><Link to={'/careers'} className='btn-link'>Careers</Link></li>
                        </ul>
                    </div>

                    <div className="footer-group">
                        <h5 className="heading-five font-bold mb-4">
                            Market
                        </h5>

                        <ul className="footer-links">
                            <li><Link to={'/markets'} className='btn-link'>U.S Dollar</Link></li>
                            <li><Link to={'/markets'} className='btn-link'>British Pound</Link></li>
                            <li><Link to={'/markets'} className='btn-link'>Euro</Link></li>
                            <li><Link to={'/markets'} className='btn-link'>Pound Sterling</Link></li>
                            <li><Link to={'/markets'} className='btn-link'>Australian Dollar</Link></li>
                        </ul>
                    </div>

                    <div className="footer-group">
                        <h5 className="heading-five font-bold mb-4">
                            Learn with Omayoza
                        </h5>

                        <ul className="footer-links">
                            <li><Link to={'/learn-with-omazoya'} className='btn-link'>How Omayoza Works</Link></li>
                            <li><Link to={'/learn-with-omazoya'} className='btn-link'>Responsible Investing</Link></li>
                            <li><Link to={'/learn-with-omazoya'} className='btn-link'>Avoid Scam</Link></li>
                            <li><Link to={'/learn-with-omazoya'} className='btn-link'>Buy and Sell Explained</Link></li>
                            <li><Link to={'/learn-with-omazoya'} className='btn-link'>Tax Report</Link></li>
                        </ul>
                    </div>

                    <div className="footer-group">
                        <h5 className="heading-five font-bold mb-4">
                            Quest
                        </h5>

                        <ul className="footer-links">
                            <li><Link to={'/quests'} className='btn-link'>Bronze</Link></li>
                            <li><Link to={'/quests'} className='btn-link'>Silver</Link></li>
                            <li><Link to={'/quests'} className='btn-link'>Gold</Link></li>
                        </ul>
                    </div>

                    <div className="footer-group">
                        <h5 className="heading-five font-bold mb-4">
                            Contact Us
                        </h5>

                        <ul className="footer-links">
                            <li><Link to={'/help'} className='btn-link'>Help Centre</Link></li>
                            <li><Link to={'/faqs'} className='btn-link'>How to open an account</Link></li>
                            <li><Link to={'/faqs'} className='btn-link'>What are the risk involved</Link></li>
                            <li><Link to={'/faqs'} className='btn-link'>How to deposit</Link></li>
                            <li><Link to={'/faqs'} className='btn-link'>How to withdraw</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="social-links flex">
                    facebook
                </div>

                <p className="text-center mt-4 primary-color">
                    Copyright &copy; Omayoza 2023
                </p>
            </div>

        </div>
    )
}

export default Footer