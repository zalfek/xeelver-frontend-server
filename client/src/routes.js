import React, {Fragment} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Dashboards from "./pages/Dashboards";
import {FlightList} from "./pages/FlightList/FlightList";
import AppHeader from "./components/AppHeader";
import AppSidebar from "./components/AppSidebar";
import Hotels from "./pages/Hotels/Hotels";
import FlightSearch from "./pages/Flight/Main";

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
                                <FlightSearch/>
                            </Route>
                            <Route path="/flights/list" exact>
                                <FlightList/>
                            </Route>
                            <Route path="/hotels/search" exact>
                                <Hotels/>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
