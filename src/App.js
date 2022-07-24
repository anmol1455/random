import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


import Results from './components/pages/results'
import HomePage from './components/pages/HomePage'

import './App.css'

export default function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={ HomePage } />
                    <Route path="/results" component={ Results } />
                </Switch>
             
            </div>
        </Router>
    )
}

