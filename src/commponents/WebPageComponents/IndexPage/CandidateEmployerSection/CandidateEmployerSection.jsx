import React from 'react';
import './CandidateEmployerSection.css';

export default function CandidateEmployerSection() {
    return (
        <div className='CandidateEmployerSection'>
            <section>
                <div className='candidateLeftSection'>
                    <p>We are putting</p>
                    <p>the power in the</p>
                    <p>in hands of those</p>
                    <p>who are looking</p>
                    <p>for work.</p>
                </div>
                <div className='candidateSeparate'></div>
                <div className='candidatePart'>
                    <p className='candidatePartHeading'>Candidate</p>
                    <p>We don't only show you sponsred job postings,</p>
                    <p>but new opportunities that are relevant to you</p>
                    <p>everyday. <span>While our AI applies to your daily top</span></p>
                    <p><span>matches,</span> you may sit back and unwind</p>
                </div>
                <div className='employerPart'>
                    <p className='employerPartHeading'>Employer</p>
                    <p>We don't only show you sponsred job postings,</p>
                    <p>but new opportunities that are relevant to you</p>
                    <p>everyday. <span>While our AI applies to your daily top</span></p>
                    <p><span>matches,</span> you may sit back and unwind</p>
                </div>
            </section>
        </div>
    )
}
