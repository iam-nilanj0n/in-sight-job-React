import React from 'react';
import JobSearchHeader from './JobSearchHeader/JobSearchHeader';
import LiveJobSection from './LiveJobSection/LiveJobSection';
import CandidateEmployerSection from './CandidateEmployerSection/CandidateEmployerSection';
import Principle from './Principle/Principle';
import PersonalRecruter from './PersonalRecruter/PersonalRecruter';
import MadeEasySection from './MadeEasySection/MadeEasySection';
import BestPlaceFooter from '../../LayoutComponents/BestPlaceFooter/BestPlaceFooter';

export default function IndexPage() {
  return (
    <div className='IndexPage'>
        <JobSearchHeader />
        <LiveJobSection />
        <CandidateEmployerSection />
        <Principle />
        <PersonalRecruter/>
        <MadeEasySection/>
        <BestPlaceFooter/>
    </div>
  )
}
