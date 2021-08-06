import React from "react";
import { Switch } from "react-router";

import Route from "./Route";

import SignIn from "../Pages/SigIn";
import SignUp from "../Pages/SigUp";
import Dashboard from "../Pages/Dashboard";

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/signup" component={SignUp} />

        <Route path="/dashboard" component={Dashboard} isPrivate />
    </Switch>
);

export default Routes;