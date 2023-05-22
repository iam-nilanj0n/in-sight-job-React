import React from 'react';
import './CandidateEmployerSection.css';

export default function CandidateEmployerSection() {
    return (
        <main className='CandidateEmployerSection'>
            <section>
                <div className='candidateLeftSection'>
                    <p>We are putting
                    <br/>the power in the
                    <br/>in hands of those
                    <br/>who are looking
                    <br/>for work.</p>
                </div>
                <div className='candidateSeparate'></div>
                <div className='candidatePart'>
                    <p className='candidatePartHeading'>Candidate</p>
                    <p>We don't only show you sponsred job postings,
                    <br/>but new opportunities that are relevant to you
                    <br/>everyday. <span>While our AI applies to your daily top</span>
                    <br/><span>matches,</span> you may sit back and unwind</p>
                </div>
                <div className='employerPart'>
                    <p className='employerPartHeading'>Employer</p>
                    <p>We don't only show you sponsred job postings,
                    <br/>but new opportunities that are relevant to you
                    <br/>everyday. <span>While our AI applies to your daily top</span>
                    <br/><span>matches,</span> you may sit back and unwind</p>
                </div>
            </section>
        </main>
    )
}
