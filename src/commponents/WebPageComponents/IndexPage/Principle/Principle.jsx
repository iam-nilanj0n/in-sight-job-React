import React from 'react';
import './Principle.css';
import Knowledge from '../../../../assets/Knowledge.svg';
import Honest from '../../../../assets/Honest.svg';
import Specialist from '../../../../assets/Specialist.svg';

export default function Principle() {
    return (
        <main className='Principle'>
            <section>
                <div className='ourPrinciples'>
                    <p className='ourPrinciplesHeading'>Our Principles</p>
                    <div className='ourPrinciplesTop'>
                        <p>We are a very committed team that takes</p>
                        <p>great satisfaction in the results we</p>
                        <p>consistently produce for our clients and</p>
                        <p>prospects.</p>
                    </div>
                    <div className='ourPrinciplesBottom'>
                        <p>To make sure we are setting the bar for</p>
                        <p>candidate and client engagement, our</p>
                        <p>principles are crucial.</p>
                    </div>
                </div>
                <img src={Knowledge} alt='knowledgePic' />
                <img src={Specialist} alt='specialistePic' />
                <img src={Honest} alt='honestPic' />
            </section>
        </main>
    )
}
