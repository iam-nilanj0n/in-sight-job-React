import React from 'react';
import './JobSearchHeader.css';
import logo from '../../assets/Logo.svg';
import { useState } from 'react';
import Menu, { MenuContext } from './menu/FindjobsMenu';


export default function JobSearchHeader() {
    const [showMenu, setShowMenu] = useState(false);

    const handleMenuClick = () => {
        setShowMenu(true);
    };

    const handleLeave = () => {
        setShowMenu(false);
    }

    return (
        <>
            <header class='JobSearchHeader'>
                <section>
                    <div className='logoSection'>
                        <div className='leftLogoSection'>
                            {/* <FindJobModal jobMenuDisplay={jobMenuDisplay}/> */}
                            <img src={logo} alt='logoPic' className='logoPic' />
                            <p className='findJobs'>
                                <MenuContext.Provider value={showMenu}>
                                    <span
                                        onMouseEnter={handleMenuClick}
                                        onMouseLeave={handleLeave}>
                                        FIND JOBS
                                        <Menu/>
                                    </span>
                                </MenuContext.Provider>
                                <span>FOR COMPANY</span>
                            </p>
                        </div>
                        <div className='rightLogoSection'>
                            <p>POST YOUR JOBS</p>
                            <div className='separater'></div>
                            <p>LOGIN</p>
                        </div>
                        <div className='dropDown'>
                            <div className='topHr'></div>
                            <div className='middleHr'></div>
                            <div className='bottomHr'></div>
                        </div>
                    </div>
                    <div className='headingSection'>
                        <p className='heading1'>
                            <span>AUTOMATIC</span> APPLYING TO JOB IS
                        </p>
                        <p className='heading1 heading1Bottom'>
                            STRESSFUL EFFORTLESSLY
                        </p>
                        <p className='heading2'>
                            Our passion is to research and select talents and qualified personnel for our Clients and to find the job you are passionate about
                        </p>
                    </div>
                    <div className='searchSection'>
                        <p className='bestCareer'>
                            <span>Find the best</span>
                            <b>Career Opportunity</b>
                            <span>for you</span>
                        </p>

                        <div className='What'>
                            <label>What?</label>
                            <input
                                type='text'
                                className='whatInput'
                                placeholder='Profession, Keyword Or Company'
                            />
                        </div>
                        <div className='Experience'>
                            <label>Experience</label>
                            <input
                                type='text'
                                className='experienceInput'
                                placeholder='Yrs. of Exp.'
                            />
                        </div>
                        <div className='Where'>
                            <label>Where?</label>
                            <input
                                type='text'
                                className='whereInput'
                                placeholder='City Of Region'
                            />
                        </div>
                        <button className='searchNowButton'>Search Now</button>
                    </div>
                    <div className='differentJobs'>
                        <p>Remote</p>
                        <div className='differentJobsSeparate'></div>
                        <p>MNC</p>
                        <div className='differentJobsSeparate'></div>
                        <p className='informationTechnology'>
                            <span>Information</span>
                            <span>Technology</span>
                        </p>
                        <div className='differentJobsSeparate'></div>
                        <p>KPO</p>
                        <div className='differentJobsSeparate'></div>
                        <p>BPO</p>
                        <div className='differentJobsSeparate'></div>
                        <p>Accounting</p>
                    </div>
                </section>
            </header>
        </>
    )
}
