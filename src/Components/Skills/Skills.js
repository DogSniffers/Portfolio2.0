import React from 'react'
import {useState,setState} from 'react'
import Button from '@material-ui/core/Button'
import './Skills.css'

function Skills(props){
    const [langList,setLangList] = useState(false)
    const [frontEndList,setFrontEndList] = useState(false)
    const [backEndList,setBackEndList] = useState(false)

    const openLangList = () => {
        setLangList(true)
        setFrontEndList(false)
        setBackEndList(false)
    }
    const openFrontEndList = () => {
        setLangList(false)
        setFrontEndList(true)
        setBackEndList(false)
    }
    const openBackEndList = () => {
        setLangList(false)
        setFrontEndList(false)
        setBackEndList(true)
    }
    return(
        <div>
            <div>
                {langList === true ? (
                    <div className='languages'>
                        <div className='javaHolder'>
                            <h1 className='java'>Java</h1>
                        </div>
                        <div className='htmlHolder'>
                            <h1 className='html'>HTML</h1>
                        </div>
                        <div className='jsHolder'>
                            <h1 className='js'>JavaScript</h1>
                        </div>
                        <div className='cssHolder'>
                            <h1 className='css'>CSS</h1>
                        </div>
                    </div>
                ):(
                    null
                )}
                {frontEndList === true ? (
                    <div className='front-end'>
                        <div>
                            <h1>ChartJS</h1>
                        </div>
                        <div>
                            <h1>Material.UI</h1>
                        </div>
                        <div>
                            <h1>React</h1>
                        </div>
                        <div>
                            <h1>Sass</h1>
                        </div>
                    </div>
                ):(
                    null
                )}
                {backEndList === true ? (
                    <div className='back-end'>
                        <div>
                            <h1>Axios</h1>
                        </div>
                        <div>
                            <h1>NodeJS</h1>
                        </div>
                        <div>
                            <h1>PostgreSQL</h1>
                        </div>
                        <div>
                            <h1>Postman</h1>
                        </div>
                        <div>
                            <h1>React Redux</h1>
                        </div>
                        <div>
                            <h1>Socket.IO</h1>
                        </div>
                        <div>
                            <h1>SQL Tabs</h1>
                        </div>
                    </div>
                ):(
                    null
                )}
                <div className='skillsButtonHolder'>
                    <div className='skillsType'>
                        <div>
                            <Button  onClick={() => openLangList()}>Language</Button>
                        </div>
                        <div>
                            <Button  onClick={() => openFrontEndList()}>Front-End</Button>
                        </div>
                        <div>
                            <Button  onClick={() => openBackEndList()}>Back-End</Button>
                        </div>
                    </div>
                    <div className='skillsNavButtons'>
                        <div>
                            <Button onClick={() => props.history.push('/aboutme')}>About Me</Button>
                        </div>
                        <div>
                            <Button onClick={() => props.history.push('/projects')}>Projects</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>     
    )
}

export default Skills