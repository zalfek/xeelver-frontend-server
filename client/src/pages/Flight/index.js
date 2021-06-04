import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';

// DASHBOARDS

import Flights from '../Flight/Main/index';

// Layout
import AppHeader from '../../components/AppHeader/index';
import AppSidebar from '../../components/AppSidebar/index';
// import AppFooter from '../../Layout/AppFooter/';

const Flight = ({match}) => (
    <Fragment>
        <AppHeader/>
        <div className="app-main">
            <AppSidebar/>
            <div className="app-main__outer">
                <div className="app-main__inner">
                    <Route path={`${match.url}/dates`} component={Flights}/>
                </div>
                {/*<div className="app-main__inner">*/}
                {/*    <Route path={`${match.url}/list`} component={FlightList}/>*/}
                {/*</div>*/}
                {/*<AppFooter/>*/}
            </div>
        </div>
    </Fragment>
);

export default Flight;