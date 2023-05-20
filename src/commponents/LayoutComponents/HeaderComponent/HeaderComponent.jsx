import React from 'react';
import './HeaderComponent.css';
import logo from '../../../assets/Logo.svg';
import { useState } from 'react';
import FindjobsMenu, { FindJobMenuContext } from './FindjobsMenu/FindjobsMenu';
import ForCompanyMenu, { ForCompanyMenuContext } from './ForCompanyMenu/ForCompanyMenu';
import { useNavigate } from 'react-router-dom';


export default function HeaderComponent({ HeaderPositionAt }) {
    const navigate = useNavigate();
    const [showFindJobMenu, setShowFindJobMenu] = useState(false);
    const [showForCompanyMenu, setShowForCompanyMenu] = useState(false)

    return (
        <>
            {(HeaderPositionAt === 'IndexPage') ?
                (<>
                    <div className='logoSection'>
                        <div className='leftLogoSection'>
                            {/* <FindJobModal jobMenuDisplay={jobMenuDisplay}/> */}
                            <img src={logo} alt='logoPic' onClick={(e) => navigate('/')} className='logoPic' />
                            <div className='findJobs'>
                                <FindJobMenuContext.Provider value={showFindJobMenu}>
                                    <span
                                        onMouseEnter={(e) => setShowFindJobMenu(true)}
                                        onMouseLeave={(e) => setShowFindJobMenu(false)}>
                                        FIND JOBS
                                        <FindjobsMenu />
                                    </span>
                                </FindJobMenuContext.Provider>

                                <ForCompanyMenuContext.Provider value={showForCompanyMenu}>
                                    <span
                                        onMouseEnter={(e) => setShowForCompanyMenu(true)}
                                        onMouseLeave={(e) => setShowForCompanyMenu(false)}>
                                        FOR COMPANY
                                        <ForCompanyMenu />
                                    </span>
                                </ForCompanyMenuContext.Provider>
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
                                        <FindJobMenuContext.Provider value={showFindJobMenu}>
                                            <span
                                                onMouseEnter={(e) => setShowFindJobMenu(true)}
                                                onMouseLeave={(e) => setShowFindJobMenu(false)}>
                                                FIND JOBS
                                                <FindjobsMenu />
                                            </span>
                                        </FindJobMenuContext.Provider>

                                        <ForCompanyMenuContext.Provider value={showForCompanyMenu}>
                                            <span
                                                onMouseEnter={(e) => setShowForCompanyMenu(true)}
                                                onMouseLeave={(e) => setShowForCompanyMenu(false)}>
                                                FOR COMPANY
                                                <ForCompanyMenu />
                                            </span>
                                        </ForCompanyMenuContext.Provider>
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
