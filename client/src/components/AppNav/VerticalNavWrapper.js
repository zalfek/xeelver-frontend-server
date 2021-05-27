import React, {Component, Fragment} from 'react';
import {withRouter} from 'react-router-dom';

import MetisMenu from 'react-metismenu';

import {MainNav, ComponentsNav, FormsNav, WidgetsNav, ChartsNav, UserMenu} from './NavItems';
import avatar1 from "../../assets/utils/images/avatars/13.jpg";
import {faAlignLeft} from "@fortawesome/free-solid-svg-icons/faAlignLeft";

class Nav extends Component {

    state = {};

    render() {
        return (
            <Fragment>
                <h5 className="app-sidebar__heading">PROFILE</h5>
                <div className="metismenu vertical-nav-menu">
                    <ul className="metismenu-container">
                        <li className="metismenu-item">
                            <div className="ches">
                                <img width={42} className="rounded-circle" src={avatar1} alt=""/>
                            </div>
                            {/*<MetisMenu content={UserMenu} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>*/}
                            {/*<h5 className="app-sidebar__heading ches2">Vjaceslavs Marmiss</h5>*/}
                            <MetisMenu content={ComponentsNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>
                        </li>
                    </ul>
                </div>
                <MetisMenu content={UserMenu} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>

                {/*<h5 className="app-sidebar__heading">Profile</h5>*/}
                {/*<MetisMenu content={MainNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>*/}
                <h5 className="app-sidebar__heading">Trip Planner</h5>
                <MetisMenu content={ComponentsNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>
                {/*<h5 className="app-sidebar__heading">Car</h5>*/}
                {/*<MetisMenu content={WidgetsNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>*/}
                {/*<h5 className="app-sidebar__heading">Forms</h5>*/}
                {/*<MetisMenu content={FormsNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>*/}
                {/*<h5 className="app-sidebar__heading">Charts</h5>*/}
                {/*<MetisMenu content={ChartsNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>*/}
            </Fragment>
        );
    }

    isPathActive(path) {
        return this.props.location.pathname.startsWith(path);
    }
}

export default withRouter(Nav);