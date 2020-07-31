import React from 'react'
import Button from '@material-ui/core/Button'
import './Projects.css'

function Projects(){
    return(
        <div>
            <div className='projectsHolder'>
                <h1 className='projectsHead'>DevMountain Projects</h1>
                <h3 className='projectInfoHead'> These are the projects that I worked on at my time attending DevMountain. The two major projects that I was assigned to work on was a Solo-Project and then a Group-Project</h3>
                <div className='projectBox'>
                    <h2 className='projectsSubHead'>The Gauntlet</h2>
                    <p className='projectInfo'> The Gauntlet was my personal project that I worked on while attending DevMountain. The app itself is a turn-based  RPG game. It has features that allow for future additions and reworks/balance fixing, and allows the user to add their own 'monsters' into the game. The app was designed in a way to have a retro feel to it, similar to some of the originally developed games for the computer. The technologies that were used for this project were React, HTML, CSS, NodeJS, React-Redux, Axios, SASS, and ChartJS </p>
                    <div className='projectImageBox'>
                        <img></img>
                    </div>
                    <div className='projectLinkBox'>
                        <Button>GitHub</Button>
                    </div>
                </div>
                <div className='projectBox'>
                    <h2 className='projectsSubHead'>Board-Game Hosting Site</h2>
                    <p className='projectInfo'>This was my group-project that I helped develop at my time at DevMountain. The goal of the app was to create a site to host board games. This project was a great learning experience, because the project started during the initial Covid-19 lock-down and required me and my group to work from home to complete the project. The project included the following technologies: React, HTML, CSS, NodeJS, React-Redux, Axios, Material-UI, and Socket.IO.</p>
                    <div className='projectImageBox'>
                        <img></img>
                    </div>
                    <div className='projectLinkBox'>
                        <Button>GitHub</Button>
                    </div>
                </div>
                
            </div>
            <div className='projectsHolder'>
                <h1 className='projectsHead'>Personal Projects</h1>
                <h3 className='projectInfoHead'> These are the projects that I have worked on in my free time. </h3>
                <div className='projectBox'>
                    <h2 className='projectsSubHead'>Filler</h2>
                    <p className='projectInfo'></p>
                    <div className='projectImageBox'>
                        <img></img>
                    </div>
                    <div className='projectLinkBox'>
                        <Button>GitHub</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects