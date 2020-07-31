import React from 'react'
import { Switch, Route} from 'react-router-dom'
import Landing from './Components/Landing/Landing'
import Skills from './Components/Skills/Skills'
import Projects from './Components/Projects/Projects'
import AboutMe from './Components/AboutMe/AboutMe'

export default(
    <Switch>
        <Route exact path='/' component={Landing}/>
        <Route path='/skills' component={Skills}/>
        <Route path='/projects' component={Projects}/>
        <Route path='/aboutme' component={AboutMe}/>
    </Switch>
)