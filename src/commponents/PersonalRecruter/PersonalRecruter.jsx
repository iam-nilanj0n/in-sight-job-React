import React from 'react';
import './PersonalRecruter.css';
import greaterThan from '../../assets/Greaterthan.svg';

export default function PersonalRecruter() {
  return (
    <div className='PersonalRecruter'>
      <section>
        <div className='PersonalRecruterLeftPart'>
          <p>Think of us as</p>
          <p>your</p>
          <p>personal recruiter</p>
        </div>
        <div className='PersonalRecruterSeparater'></div>
        <div className='PersonalRecruterRightPart'>
          <p>We're always looking for the best</p>
          <p>opportunities for you.</p>
          <p>With over 5 million active jobs refreshed daily,</p>
          <p>we keep a</p>
          <p>pulse on the market — so you don't have to.</p>
        </div>
        <button className='inJobsightButton'>
          <span>
            Try #inJobsight for Free
          </span>
          <img src={greaterThan} alt='greaterThan' className='greaterThan' />
        </button>
      </section>
    </div>
  )
}
