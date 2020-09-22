import React from 'react';
import history from '../history';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";


import Search from "../routes/Search";
import SingleCard from "../routes/SingleCard"
import Fresh from "../routes/Fresh"
import Training from "../routes/Training"
import Rookie from "../routes/Rookie"
import Champion from "../routes/Champion"
import Ultimate from "../routes/Ultimate"
import Mega from "../routes/Mega"

class App extends React.Component {
    render() {
        return (
            <div>
                <Router history={history}>
                    <Switch >
                        <Route path="/Search" component={Search} />
                        <Route path="/SingleCard" component={SingleCard} />
                        <Route path="/Fresh" component={Fresh} />
                        <Route path="/Training" component={Training} />
                        <Route path="/Rookie" component={Rookie} />
                        <Route path="/Champion" component={Champion} />
                        <Route path="/Ultimate" component={Ultimate} />
                        <Route path="/Mega" component={Mega} />

                        <Redirect from='/' to='/Search' />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;