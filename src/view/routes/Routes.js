import React from 'react';
import {Route, Switch} from "react-router-dom";
import NotFound from "../pages/Results/NotFound";
import Home from "../pages/Home";
import Poster from "../pages/Work/Poster";
import PptDesign from "../pages/Work/PptDesign";
import Brochure from "../pages/Work/Brochure";
import Package from "../pages/Work/Package";
import Banner from "../pages/Work/Banner";

const Routes = () => {

    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/poster" component={Poster}/>
            <Route exact path="/ppt" component={PptDesign}/>
            <Route exact path="/brochure" component={Brochure}/>
            <Route exact path="/package" component={Package}/>
            <Route exact path="/banner" component={Banner}/>z
            <Route component={NotFound}/>
        </Switch>
    )
}

export default Routes;
