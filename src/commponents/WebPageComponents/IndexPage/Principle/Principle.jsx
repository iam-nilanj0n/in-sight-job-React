import React from 'react';
import './Principle.css';
import Knowledge from '../../../../assets/Knowledge.png';
import Honest from '../../../../assets/Honest.png';
import Specialist from '../../../../assets/Specialist.png';

export default function Principle() {
    return (
        <main className='Principle'>
            <section>
                <div className='ourPrinciples'>
                    <p className='ourPrinciplesHeading'>Our Principles</p>
                    <div className='ourPrinciplesTop'>
                        <p>We are a very committed team that takes
                        <br/>great satisfaction in the results we
                        <br/>consistently produce for our clients and
                        <br/>prospects.</p>
                    </div>
                    <div className='ourPrinciplesBottom'>
                        <p>To make sure we are setting the bar for
                        <br/>candidate and client engagement, our
                        <br/>principles are crucial.</p>
                    </div>
                </div>

                <div className='Img-Container'>
                    <b className='Img-Container-Heading'>Knowledgable</b>
                    <div className='Img-Container-Div'>
                        <img src={Knowledge} alt='knowledgePic' className='knowledgePic' />
                    </div>
                    <div className='Img-Container-P'>
                        <p style={{margin:'-2vh 0 0 0'}}>We do as we say, we give.</p>
                    </div>
                </div>

                <div className='Img-Container'>
                    <b className='Img-Container-Heading'>Specialists</b>
                    <div className='Img-Container-Div' >
                        <img src={Specialist} alt='specialistePic' className='specialistePic' />
                    </div>
                    <div className='Img-Container-P'>
                        <p>We adapt to your requirements,
                        <br/>we go beyond.</p>
                    </div>
                </div>

                <div className='Img-Container'>
                    <b className='Img-Container-Heading'>Honest</b>
                    <div className='Img-Container-Div'>
                        <img src={Honest} alt='honestPic' className='honestPic' />
                    </div>
                    <div className='Img-Container-P'>
                        <p>We are a dependable and
                        <br/>trustworthy partner.</p>
                    </div>
                </div>
            </section>
        </main>
    )
}
