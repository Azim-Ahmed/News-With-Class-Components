import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import './app.css'
import Privacy from './components/Privacy/Privacy';
import Terms from './components/Terms/Terms';
import NotFound from './components/NotFound/NotFound';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/privacy">
                    <Privacy />
                </Route>
                <Route path="/terms">
                    <Terms />
                </Route>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </Router>
    )
}

export default App
