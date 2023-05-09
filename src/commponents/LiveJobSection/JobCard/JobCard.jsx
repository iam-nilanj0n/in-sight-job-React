import React from 'react'
import ArrowLogo from '../arrowLogo/arrowLogo';
import './JobCard.css'

export default function JobCard() {
    return (
        <div className='JobCard'>
            <p className='JobCardHeading'>Embedded Software</p>
            <p className='JobCardHeading'>Developer-Contract</p>
            <div className='contractDetails'>
                <p className='placeName'>Berkshire,England,London</p>
                <p className='placeName'>(Central),England,Hampshire,</p>
                <p className='placeName'>England</p>
                <p className='jobContract'>Contract</p>
                <p className='working'>£55-£60 per hour plus hybrid</p>
                <p className='working'>working</p>
            </div>
            <div className='readMore'>
                <p>Read More</p>
                <ArrowLogo />
            </div>
        </div>
    )
}
