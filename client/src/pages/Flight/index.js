import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';


import Flights from '../Flight/Main/index';

import AppHeader from '../../components/AppHeader/index';
import AppSidebar from '../../components/AppSidebar/index';


const Flight = ({match}) => (
    <Fragment>
        <AppHeader/>
        <div className="app-main">
            <AppSidebar/>
            <div className="app-main__outer">
                <div className="app-main__inner">
                    <Route path={`${match.url}/search`} component={Flights}/>
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