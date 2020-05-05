import React from 'react'
import './style.css'
import logo from '../../vectors/Rectangle.png'
import github from '../../vectors/github.svg'
import versionControl from '../../vectors/version-control.svg'
import designFeedback from '../../vectors/design_feedback.svg'
import realTime from '../../vectors/real-time.svg'

class IndexPage extends React.Component {


    render() {
        return (
            <div className={'index-page'}>
                <div className='container'>
                    <div className='landing'>
                        <div className='logo-svg'>
                            <img alt='' src={logo} />
                        </div>
                        <div className='head'>
                            <p>We are a <span className='digital'>digital agency</span> <br></br>based on <span className='technology'>technology</span></p>
                            {/* <div className='btn'>
                                Explore
                            </div> */}
                        </div>
                    </div>
                    <div className='tag'>We’re <span className='reinventing'>reinventing</span> offshore energy through sustainable, cutting-edge technology.</div>
                    <div className='container-basic'>
                    <div className='description'>
                        <h1>GitHub</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque vitae malesuada bibendum quam aliquam. At dolor, sit eget commodo neque, accumsan nec volutpat. Sit posuere non mi duis id. </p>
                            <div className='btn'>
                                <div className='elements'>
                                    <img src={github} alt=''/>
                                    <div className='git'>
                                        GitHub
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className='logo-svg'>
                            <img alt='' src={versionControl} />
                    </div>
                </div>
                <div className='container-basic'>
                    <div className='logo-svg'>
                            <img alt='' src={designFeedback} />
                    </div>
                    <div className='description alter'>
                            <div>
                            <h1>Main Projects</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque vitae malesuada bibendum quam aliquam. At dolor, sit eget commodo neque, accumsan nec volutpat. Sit posuere non mi duis id. </p>
                            </div>
                            <div className='btn'>
                                <div className='elements'>
                                    <div className='git'>
                                        Know More
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container-basic'>
                    <div className='description'>
                        <h1>Clients</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque vitae malesuada bibendum quam aliquam. At dolor, sit eget commodo neque, accumsan nec volutpat. Sit posuere non mi duis id. </p>
                            <p style={{fontSize: '12px', fontWeight: 'bold'}}>-Name</p>
                    </div>
                    <div className='logo-svg'>
                            <img alt='' src={realTime} />
                    </div>
                </div>
                <div className='container-basic'>
                    <div className='logo-svg'>
                            <img alt='' src={designFeedback} />
                    </div>
                    <div className='description alter'>
                            <div>
                            <h1>Main Projects</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque vitae malesuada bibendum quam aliquam. At dolor, sit eget commodo neque, accumsan nec volutpat. Sit posuere non mi duis id. </p>
                            </div>
                            <div className='btn'>
                                <div className='elements'>
                                    <div className='git'>
                                        Know More
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default IndexPage