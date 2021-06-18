import React, {Fragment} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Dashboards from "./pages/Dashboards";
import {FlightList} from "./pages/FlightList/FlightList";
import AppHeader from "./components/AppHeader";
import AppSidebar from "./components/AppSidebar";
import Hotels from "./pages/Hotels/Hotels";
import FlightSearch from "./pages/Flight/Main";
import FlightBook from "./pages/FlightBook/FlightBook";
import {HotelList} from "./pages/Hotels/HotelList";
import {HotelRooms} from "./pages/HotelRooms/HotelRooms";
import HotelBook from "./pages/HotelBook/HotelBook";

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
                            <Route path="/flights/book/" >
                                <FlightBook/>
                            </Route>
                            <Route path="/hotels/list/" exact >
                              <HotelList/>
                            </Route>
                            <Route path="/hotels/rooms/" >
                               <HotelRooms/>
                            </Route>
                            {/*<Route path="hotels/rooms/book/" >*/}
                            {/*    <FlightBook/>*/}
                            {/*</Route>*/}
                        </Switch>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
