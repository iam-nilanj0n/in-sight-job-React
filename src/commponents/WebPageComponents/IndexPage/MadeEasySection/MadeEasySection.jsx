import React from 'react';
import './MadeEasySection.css';
import greaterThan from '../../../../assets/Greaterthan.svg';

export default function MadeEasySection() {
    return (
        <div className='MadeEasySection'>
            <section>
                <div className='MadeEasySectionLeftPart'>
                    <p>Job search</p>
                    <p>made easy</p>
                </div>
                <div className='MadeEasySectionSeparater'></div>
                <div className='MadeEasySectionRightPart'>
                    <div>
                        <b className='MadeEasySectionRightPartHeading'>Target</b>
                        <p>Complete our short</p>
                        <p>questionnaire to</p>
                        <p>help us find jobs</p>
                        <p>that are best suited</p>
                        <p>to your needs.</p>
                    </div>
                    <div className='MadeEasySectionRightPartMiddle'>
                        <b className='MadeEasySectionRightPartHeading'>Match</b>
                        <p>Complete our</p>
                        <p>short</p>
                        <p>questionnaire</p>
                        <p>to help us find</p>
                        <p>jobs that are</p>
                        <p>best suited to</p>
                        <p>your needs.</p>
                    </div>
                    <div>
                        <b className='bold'>
                            <span>Auto</span>
                            <span>Apply</span>
                        </b>
                        <b></b>
                        <p>Complete our</p>
                        <p>short</p>
                        <p>questionnaire</p>
                        <p>to help us find</p>
                        <p>jobs that are</p>
                        <p>best suited to</p>
                        <p>your needs.</p>
                    </div>
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
