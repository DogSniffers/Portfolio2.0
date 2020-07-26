import React from 'react'
import './Skills.css'

function Skills(){
    return(
        <div>
            <div className='skillsContent'>
                <div className='skillsHolder'>
                    <div>
                        <h1 className='skillsPageHead'>Skills</h1>
                    </div>
                    <div className='skills'>
                        <ul>
                            <li>Test</li>
                        </ul>
                    </div>
                </div>
                <div className='techHolder'>
                    <h1 className='skillsPageHead'>Tech</h1>
                    <div className='tech'>
                        <div>
                            <h2 className='techHeads'>Languages</h2>
                                <ul>
                                    <li>Java</li>
                                    <li>HTML</li>
                                    <li>JavaScript</li>
                                    <li>CSS</li>
                                </ul>
                        </div>
                        <div>
                            <h2 className='techHeads'>Technologies</h2>
                            <div>
                                <h3 className='techHeads'>Front-End</h3>
                                    <ul>
                                        <li>ChartJS</li>
                                        <li>Material.UI</li>
                                        <li>React</li>
                                        <li>SASS</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className='techHeads'>Back-End</h3>
                                    <ul>
                                        <li>Axios</li>
                                        <li>NodeJS</li>
                                        <li>PostgreSQL</li>
                                        <li>Postman</li>
                                        <li>React Redux</li>
                                        <li>Socket.io</li>
                                        <li>SQL Tabs</li>
                                    </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills