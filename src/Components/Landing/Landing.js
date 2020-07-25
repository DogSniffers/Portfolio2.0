import React from 'react'
import Button from '@material-ui/core/Button'
import {makeStyles} from '@material-ui/core/styles'

import './Landing.css'

const styles = makeStyles({
    navButton:{
        backgroundColor:'red',
        margin:'5px',
    }
})
function Landing(){
    const style = styles()
    return(
        <div className='landing'>
            <div className='landingHolder'>
                    <img className='mugshot'></img>
                    <h1 className='landingText'>Noah Van Buskirk</h1>
                    <h2 className='landingText'>Welcome to my Portfolio!</h2>
                <div>
                    <Button className={style.navButton}>About Me</Button>
                    <Button className={style.navButton}>Technologies and Skills</Button>
                    <Button className={style.navButton}>Projects</Button>
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}

export default Landing