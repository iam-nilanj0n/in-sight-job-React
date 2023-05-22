import React from 'react';
import './PersonalRecruter.css';
import greaterThan from '../../../../assets/Greaterthan.svg';

export default function PersonalRecruter() {
  return (
    <main className='PersonalRecruter'>
      <section>
        <div className='PersonalRecruterLeftPart'>
          <p>Think of us as
          <br/>your
          <br/>personal recruiter</p>
        </div>
        <div className='PersonalRecruterSeparater'></div>
        <div className='PersonalRecruterRightPart'>
          <p>We're always looking for the best
          <br/>opportunities for you.</p>
          <p style={{marginTop: '1vh', marginBottom: '1vh'}}>With over 5 million active jobs refreshed daily,
          <br/>we keep a</p>
          <p>pulse on the market — so you don't have to.</p>
        </div>
        <button className='inJobsightButton'>
          <span>
            Try #inJobsight for Free
          </span>
          <img src={greaterThan} alt='greaterThan' className='greaterThan' />
        </button>
      </section>
    </main>
  )
}
