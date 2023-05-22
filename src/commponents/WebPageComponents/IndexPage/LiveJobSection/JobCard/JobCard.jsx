import React from 'react'
import ArrowLogo from '../arrowLogo/arrowLogo';
import './JobCard.css'

export default function JobCard() {
    return (
        <div className='JobCard'>
            <p className='JobCardHeading'>Embedded Software
            <br/>Developer-Contract</p>
            <div className='contractDetails'>
                <p className='placeName'>Berkshire,England,London
                <br/>(Central),England,Hampshire,
                <br/>England</p>
                <p className='jobContract'>Contract</p>
                <p className='working'>£55-£60 per hour plus hybrid
                <br/>working</p>
            </div>
            <div className='readMore'>
                <p>Read More</p>
                <ArrowLogo />
            </div>
        </div>
    )
}
