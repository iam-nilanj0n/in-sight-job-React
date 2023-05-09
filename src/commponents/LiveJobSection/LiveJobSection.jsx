import React from 'react';
import './LiveJobSection.css';
import ArrowLogo from './arrowLogo/arrowLogo';
import JobCard from './JobCard/JobCard';

export default function LiveJobSection() {
  return (
    <main className='LiveJobSection'>
        <section>
            <div className='liveJobsAndCandidate'>
                <div className='liveJobs'>
                    <p className='liveJobsTop'>
                        <span>1156</span> live jobs
                    </p>
                    <p className='liveJobsMiddle'>
                        Here is our latest &gt;
                    </p>
                    <div className='viewAllDiv'>
                        <p>View All</p>
                        <ArrowLogo/>
                    </div>
                </div>
                <div className='candidates'>
                    <p className='candidatesTop'>
                        <span>10k</span> active
                    </p>
                    <p className='candidatesMiddle'>
                        Candidates
                    </p>
                    <div className='viewAllDiv'>
                        <p>View All</p>
                        <ArrowLogo/>
                    </div>

                </div>
            </div>
            <div className='jobCardSection'>
                <JobCard/>
                <JobCard/>
                <JobCard/>
                <JobCard/>
                <JobCard/>
                <JobCard/>
                <JobCard/>
                <JobCard/>
            </div>
        </section>
    </main>
  )
}
