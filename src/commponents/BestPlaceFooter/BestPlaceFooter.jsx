import React from 'react'
import './BestPlaceFooter.css';
import facebookLogo from '../../assets/Facebook.svg';
import linkedinLogo from '../../assets/Linkedin.svg';
import instagramLogo from '../../assets/Instagram.svg';

export default function BestPlaceFooter() {
  return (
    <footer className='BestPlaceFooter'>
      <section>
        <div className='BestPlaceFooterTop'>
          <p>Be in the best place you can be. Always</p>
          <div>
            <button>Refer a friend</button>
            <button className='middleButton'>Looking for job?</button>
            <button>I am hiring?</button>
          </div>
        </div>
        <div className='BestPlaceFooterBottom'>
          <div className='BestPlaceFooterBottom1st'>
            <b>Find Jobs</b>
            <p>Popular categories</p>
            <p>Jobs in demand</p>
            <p>Jobs by location</p>
            <p>More Jobs</p>
          </div>
          <div className='BestPlaceFooterBottom2nd'>
            <b>For Company</b>
            <p>Post a free job</p>
            <p>Knowledge base</p>
            <p>Pricing</p>
            <p>Login</p>
          </div>
          <div className='BestPlaceFooterBottom3rd'>
            <b>For Company</b>
            <p>Support</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>Pricing</p>
          </div>
          <div className='BestPlaceFooterBottom4th'>
            <p>© 2022 in Jobs Sight Inc.</p>
            <div className='BestPlaceFooterLogos'>
              <img src={facebookLogo} alt='facebookLogo' />
              <img src={linkedinLogo} alt='linkedinLogo' className='linkedinLogo' />
              <img src={instagramLogo} alt='instagramLogo' />
            </div>
            <p>made with designdot</p>
          </div>
        </div>
      </section>
    </footer>
  )
}
