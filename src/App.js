import React from 'react';
import JobSearchHeader from './commponents/JobSearchHeader/JobSearchHeader';
import './App.css';
import LiveJobSection from './commponents/LiveJobSection/LiveJobSection';
import CandidateEmployerSection from './commponents/CandidateEmployerSection/CandidateEmployerSection';
import Principle from './commponents/Principle/Principle';
import PersonalRecruter from './commponents/PersonalRecruter/PersonalRecruter';
import MadeEasySection from './commponents/MadeEasySection/MadeEasySection';
import BestPlaceFooter from './commponents/BestPlaceFooter/BestPlaceFooter';


const App = () => {
  return (
    <div className='App'>
      <JobSearchHeader/>
      <LiveJobSection/>
      <CandidateEmployerSection/>
      <Principle/>
      <PersonalRecruter/>
      <MadeEasySection/>
      <BestPlaceFooter/>
    </div>
  );
};

export default App;

