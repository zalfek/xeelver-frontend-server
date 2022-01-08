import React, {Fragment} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import HomePage from "../pages/HomePage/HomePage";
import {FlightList} from "../pages/FlightList/FlightList";
import AppHeader from "../components/AppHeader/AppHeader";
import AppSidebar from "../components/AppSidebar/AppSidebar";
import Hotels from "../pages/HotelSearch/HotelSearch";
import FlightSearch from "../pages/FlightSearch/FlightSearch";
import FlightBook from "../pages/FlightBook/FlightBook";
import {HotelList} from "../pages/HotelSearch/HotelList";
import {HotelRooms} from "../pages/HotelRooms/HotelRooms";
import FlightOrder from '../pages/FlightOrderPage/FlightOrderPage'
import UserProfile from "../pages/UserPage/UserPage";
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
                                <HomePage/>
                            </Route>
                            <Route path="/profile" exact>
                                <UserProfile/>
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
                            <Route path="/flights/order" exact >
                                <FlightOrder/>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
