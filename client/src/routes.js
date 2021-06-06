import React, {Fragment} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Flights from "./pages/Flight/Main";
import Dashboards from "./pages/Dashboards";
import {FlightList} from "./pages/FlightList/FlightList";
import AppHeader from "./components/AppHeader";
import AppSidebar from "./components/AppSidebar";

export const useRoutes = () => {

    return (
        <Fragment>
            <AppHeader/>
            <div className="app-main">
                <AppSidebar/>
                <div className="app-main__outer">
                    <div className="app-main__inner">
                        <Switch>
                            <Route path="/" exact>
                                <Dashboards/>
                            </Route>
                            <Route path="/flights/search" exact>
                                <Flights/>
                            </Route>
                            <Route path="/flights/list" exact>
                                <FlightList/>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
