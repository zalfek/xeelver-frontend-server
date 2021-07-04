import React, {Component, Fragment} from 'react';
import {withRouter} from 'react-router-dom';
import MetisMenu from 'react-metismenu';
import UserService from "../../services/UserService";
import {ComponentsNav, UserMenu} from './NavItems';
import avatar1 from "../../assets/utils/images/avatars/13.jpg";

class Nav extends Component {

    state = {};

    render() {
        return (
            <Fragment>
                {!UserService.isLoggedIn()?null:
                    <div>
                <h5 className="app-sidebar__heading">PROFILE </h5>
                <div className="metismenu vertical-nav-menu">
                    <ul className="metismenu-container">
                        <li className="metismenu-item">
                            <div className="ches">
                                <img width={42} className="rounded-circle" src={avatar1} alt=""/>
                            </div>
                        </li>
                    </ul>
                </div>
                <MetisMenu content={UserMenu} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>
                    </div>}
                <h5 className="app-sidebar__heading">Trip Planner</h5>
                <MetisMenu content={ComponentsNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>
            </Fragment>
        );
    }

    isPathActive(path) {
        return this.props.location.pathname.startsWith(path);
    }
}

export default withRouter(Nav);