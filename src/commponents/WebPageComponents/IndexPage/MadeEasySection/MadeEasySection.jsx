import React from 'react';
import './MadeEasySection.css';
import greaterThan from '../../../../assets/Greaterthan.svg';

export default function MadeEasySection() {
    return (
        <main className='MadeEasySection'>
            <section>
                <div className='MadeEasySectionLeftPart'>
                    <p>Job search
                    <br/>made easy</p>
                </div>
                <div className='MadeEasySectionSeparater'></div>
                <div className='MadeEasySectionRightPart'>
                    <div>
                        <b className='MadeEasySectionRightPartHeading'>Target</b>
                        <p>Complete our short
                        <br/>questionnaire to
                        <br/>help us find jobs
                        <br/>that are best suited
                        <br/>to your needs.</p>
                    </div>
                    <div className='MadeEasySectionRightPartMiddle'>
                        <b className='MadeEasySectionRightPartHeading'>Match</b>
                        <p>Complete our
                        <br/>short
                        <br/>questionnaire
                        <br/>to help us find
                        <br/>jobs that are
                        <br/>best suited to
                        <br/>your needs.</p>
                    </div>
                    <div>
                        <b className='bold'>
                            <span>Auto</span>
                            <span>Apply</span>
                        </b>
                        <p>Complete our
                        <br/>short
                        <br/>questionnaire
                        <br/>to help us find
                        <br/>jobs that are
                        <br/>best suited to
                        <br/>your needs.</p>
                    </div>
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
