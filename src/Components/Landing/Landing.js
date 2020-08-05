import React from 'react'


import './Landing.css'


function Landing(props){
    return(
        <div id='landingBody'>
        <div className='landingLinkHolder'>
            <div className='landingLink'>
                <div className='linkAM'>
                    <h3>About Me!</h3>
                </div>
            </div>
            
        </div>
             <div>
                <h1 className='HI'>Hi,</h1>
            </div>
            <div>
                <h2 className='IM'>I'm</h2>
            </div>
            <div className='NVB'>
                <h1>Noah Van Buskirk</h1>
            </div>
            <div>
                <h1 className='landingHeadText'>Welcome to my Portfolio!</h1>  
            </div>
        </div>
    )
}

export default Landing