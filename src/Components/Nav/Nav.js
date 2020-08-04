import React from 'react'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import {withRouter} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles'
import './Nav.css'

const styles = makeStyles({
    navButton:{
        height:'50px',
    },
    navDropdownButton:{
        width:'20px',
    },
})



function Nav(props){
    const style = styles()

    const [anchorEl, setAnchorEl] = React.useState(null);
      
    const handleOpen = (event) => {
          setAnchorEl(event.currentTarget);
        };

    const pushLandingCloseMenu = () => {
        setAnchorEl(null)
        props.history.push('/')
    }
    const pushAboutMeCloseMenu = () => {
        setAnchorEl(null)
        props.history.push('/aboutme')
    }
    const pushSkillsCloseMenu = () => {
        setAnchorEl(null)
        props.history.push('/skills')
    }
    const pushProjectsCloseMenu = () => {
        setAnchorEl(null)
        props.history.push('/projects')
    }
    return(
        <div className='nav'>
            <div className='navOpacity'></div>
            <div id='navButtonsDiv'>
                <Button onClick={() => props.history.push('/')} className={style.navButton}>Landing</Button>
                <Button onClick={() => props.history.push('/aboutme')} className={style.navButton}>About Me</Button>
                <Button onClick={() => props.history.push('/skills')} className={style.navButton}>Skills</Button>
                <Button onClick={() => props.history.push('/projects')} className={style.navButton}>Projects</Button>
            </div>
            <div id='navButtonsPhone'>
            <Button aria-controls='navMenu' aria-haspopup='true'  onClick={handleOpen}>Test</Button>
                <Menu id='navMenuOpacity'
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}></Menu>
                <Menu id='navMenu'
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      >
                    <MenuItem  className={style.navDropdownButton} onClick={() => pushLandingCloseMenu()}>Landing</MenuItem>
                    <MenuItem  className={style.navDropdownButton} onClick={() => pushAboutMeCloseMenu()}>About Me</MenuItem>
                    <MenuItem  className={style.navDropdownButton} onClick={() => pushSkillsCloseMenu()}>Skills</MenuItem>
                    <MenuItem  className={style.navDropdownButton} onClick={() => pushProjectsCloseMenu()}>Projects</MenuItem>
                </Menu>
            </div>
        </div>
    )
}

export default withRouter(Nav)