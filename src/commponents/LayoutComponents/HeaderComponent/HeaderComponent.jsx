import React from 'react';
import './HeaderComponent.css';
import logo from '../../../assets/Logo.svg';
import { useState } from 'react';
import Menu, { MenuContext } from './menu/FindjobsMenu';
import { useNavigate } from 'react-router-dom';


export default function HeaderComponent({ HeaderPositionAt }) {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);

    const handleMenuClick = () => {
        setShowMenu(true);
    };

    const handleLeave = () => {
        setShowMenu(false);
    }

    return (
        <>
            {(HeaderPositionAt === 'IndexPage') ?
                (<>
                    <div className='logoSection'>
                        <div className='leftLogoSection'>
                            {/* <FindJobModal jobMenuDisplay={jobMenuDisplay}/> */}
                            <img src={logo} alt='logoPic' onClick={(e) => navigate('/')} className='logoPic' />
                            <div className='findJobs'>
                                <MenuContext.Provider value={showMenu}>
                                    <span
                                        onMouseEnter={handleMenuClick}
                                        onMouseLeave={handleLeave}>
                                        FIND JOBS
                                        <Menu />
                                    </span>
                                </MenuContext.Provider>
                                <span>FOR COMPANY</span>
                            </div>
                        </div>
                        <div className='rightLogoSection'>
                            <p>POST YOUR JOBS</p>
                            <div className='separater'></div>
                            <p onClick={(e) => navigate('/login')}>LOGIN</p>
                        </div>
                        <div className='dropDown'>
                            <div className='topHr'></div>
                            <div className='middleHr'></div>
                            <div className='bottomHr'></div>
                        </div>
                    </div>
                </>) :
                ((HeaderPositionAt === 'AnyOtherPage') ? (
                    <div className='HeaderComponent'>
                        <section className='HeaderComponent-Section'>

                            <div className='logoSection'>

                                <div className='leftLogoSection'>
                                    {/* <FindJobModal jobMenuDisplay={jobMenuDisplay}/> */}
                                    <img src={logo} alt='logoPic' onClick={(e) => navigate('/')} className='logoPic' />
                                    <div className='findJobs'>
                                        <MenuContext.Provider value={showMenu}>
                                            <span
                                                onMouseEnter={handleMenuClick}
                                                onMouseLeave={handleLeave}>
                                                FIND JOBS
                                                <Menu />
                                            </span>
                                        </MenuContext.Provider>
                                        <span>FOR COMPANY</span>
                                    </div>
                                </div>

                                <div className='rightLogoSection'>
                                    <p>POST YOUR JOBS</p>
                                    <div className='separater'></div>
                                    <p onClick={(e) => navigate('/login')}>LOGIN</p>
                                </div>

                                <div className='dropDown'>
                                    <div className='topHr'></div>
                                    <div className='middleHr'></div>
                                    <div className='bottomHr'></div>
                                </div>

                            </div>

                        </section>
                    </div>
                ) : (<></>))}

        </>
    )
}
