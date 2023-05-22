import React from 'react';
import './JobCardLeftAside.css';
import jobCardLogo from '../../../../assets/image_4.png';
import noteIcon from '../../../../assets/note-icon.png';

export default function JobCardLeftAside() {
    return (
        <div className='JobCardLeftAside'>
            <img src={jobCardLogo} alt='jobCardLogo' className='jobCardLogo' />
            <div className='JobCardLeftAside-Div'>
                <div className='JobCardLeftAside-Div-Top'>
                    <p className='JobCardLeftAside-Div-Top-Heading'>Embedded Software  Developer - Contract</p>
                    <p className='JobCardLeftAside-Div-Top-SubHeading'>UCLA Health, Hampshire, England</p>
                </div>

                <div className='JobCardLeftAside-Div-Bottom'>
                    <img src={noteIcon} alt='noteIcon' className='noteIcon'/>
                    <p className='Be-Early-applicant'>Be an early applicant</p>
                    <p className='jobPost-Time'>1 Hour Ago</p>
                </div>
            </div>
        </div>
    )
}
