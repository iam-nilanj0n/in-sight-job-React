import React from 'react';
import './SearchResultPage.css';
import HeaderComponent from '../../LayoutComponents/HeaderComponent/HeaderComponent';
import BestPlaceFooter from '../../LayoutComponents/BestPlaceFooter/BestPlaceFooter';
import polygonIcon from '../../../assets/Polygon.png';
import JobCardLeftAside from './JobCardLeftAside/JobCardLeftAside';
import jobCardLogo from '../../../assets/image_4.png';

export default function SearchResultPage() {
    return (
        <div className='SearchResultPage'>
            {/* Header is here */}
            <HeaderComponent HeaderPositionAt={'AnyOtherPage'} />


            {/* SearchResultPage main part is here */}
            <main className='SearchResultPage-Main'>

                {/* This section contains Top search Box */}
                <section className='SearchResultPage-Main-Section'>

                    <div className='SearchResultPage-Top-Search'>
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
                        <button className='searchNowButton'>SEARCH NOW</button>
                    </div>
                </section>
                

                {/* This section contains more filters for job results*/}
                <section className='SearchResultPage-Middle-Filtered-Search'>
                    <section className='SearchResultPage-Middle-Filtered-Search-section'>
                        <div className='liveJob-with-location'>
                            <p>
                                <span>1156</span>
                                 Jobs in Accounting
                            </p>
                            <p>in USA</p>
                        </div>

                        <div className='SearchResultPage-Middle-Filter-inputs'>
                            <div className='SearchResultPage-Middle-Filter-InputBox'>
                                <input type='text' placeholder='Any time'/>
                                <button>
                                    <img src={polygonIcon} alt='polygonIcon' className='polygonIcon'/>
                                </button>
                            </div>

                            <div className='SearchResultPage-Middle-Filter-InputBox'>
                                <input type='text' placeholder='Company'/>
                                <button>
                                    <img src={polygonIcon} alt='polygonIcon' className='polygonIcon'/>
                                </button>
                            </div>

                            <div className='SearchResultPage-Middle-Filter-InputBox'>
                                <input type='text' placeholder='Salary'/>
                                <button>
                                    <img src={polygonIcon} alt='polygonIcon' className='polygonIcon'/>
                                </button>
                            </div>

                            <div className='SearchResultPage-Middle-Filter-InputBox'>
                                <input type='text' placeholder='Location'/>
                                <button>
                                    <img src={polygonIcon} alt='polygonIcon' className='polygonIcon'/>
                                </button>
                            </div>

                            <div className='SearchResultPage-Middle-Filter-InputBox'>
                                <input type='text' placeholder='Style'/>
                                <button>
                                    <img src={polygonIcon} alt='polygonIcon' className='polygonIcon'/>
                                </button>
                            </div>
                        </div>

                    </section>
                </section>

                {/* This contains All jobs and job description */}
                <section className='SearchResultPage-JobDiplay-Description-Section'>
                    <div className='SearchResultPage-JobDisplay-LeftAside'>
                        <JobCardLeftAside/>
                        <JobCardLeftAside/>
                        <JobCardLeftAside/>
                        <JobCardLeftAside/>
                        <JobCardLeftAside/>
                    </div>

                    <div className='SearchResultPage-JobDisplay-Separator'></div>

                    <div className='SearchResultPage-Job-Description'>
                        <div>
                            <img src={jobCardLogo} alt='jobCardLogo' className='jobCardLogo-SearchResultPage'/>
                        </div>
                    </div>

                </section>
            </main>

            {/* Footer is here */}
            <BestPlaceFooter />
        </div>
    )
}
