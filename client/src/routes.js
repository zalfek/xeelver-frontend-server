import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Main from "./pages/Main";
import Flights from "./pages/Flight/Main";
import Dashboards from "./pages/Dashboards";
import Flight from "./pages/Flight";
import {FlightList} from "./pages/FlightList/FlightList";

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path="/" exact>
                    {/*<LinksPage />*/}
                </Route>
                <Route path="/create" exact>
                    {/*<CreatePage />*/}
                </Route>
                <Route path="/detail/:id">
                    {/*<DetailPage />*/}
                </Route>
                <Redirect to="/create" />
            </Switch>
        )
    }

    return (
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
    )
}
