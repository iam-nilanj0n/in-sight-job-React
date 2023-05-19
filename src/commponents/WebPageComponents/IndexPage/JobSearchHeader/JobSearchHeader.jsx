import React from 'react';
import './JobSearchHeader.css';
import HeaderComponent from '../../../LayoutComponents/HeaderComponent/HeaderComponent';
// 


export default function JobSearchHeader() {

    return (
        <>
            <header className='JobSearchHeader'>
                <section>
                    {/* Top Logo Section is Here */}
                    <HeaderComponent HeaderPositionAt={'IndexPage'} />
                    {/* Main Heading Section is here */}
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

                    {/* Search Section is here */}
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
                    {/* Bottom Diffrent types of Jobs are here */}
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
