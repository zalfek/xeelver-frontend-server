import React, {Fragment} from 'react';

import {
    DropdownToggle, DropdownMenu,
    Nav, Button, NavItem, NavLink,
    UncontrolledTooltip, UncontrolledButtonDropdown
} from 'reactstrap';

import {
    toast,
    Bounce
} from 'react-toastify';


import {
    faCalendarAlt,
    faAngleDown,
    faShoppingCart

} from '@fortawesome/free-solid-svg-icons';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {MainNav, ComponentsNav, FormsNav, WidgetsNav, ChartsNav, UserMenu,BasketNav} from '../../AppNav/NavItems';

import avatar1 from '../../../assets/utils/images/avatars/12.jpg';
import MetisMenu from "react-metismenu";

class UserBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
        };

    }

    notify2 = () => this.toastId = toast("You don't have any new items in your calendar for today! Go out and play!", {
        transition: Bounce,
        closeButton: true,
        autoClose: 5000,
        position: 'bottom-center',
        type: 'success'
    });


    render() {

        return (
            <Fragment>
                <div className="header-btn-lg pr-0">
                    <div className="widget-content p-0">
                        <div className="widget-content-wrapper">


                            <div className="widget-content-left  ml-3 header-user-info">
                                <div className="widget-heading">
                                    Shopping Basket
                                </div>
                                <div className="widget-subheading">
                                    512€
                                </div>
                            </div>

                            {/*<div className="widget-content-right header-user-info ml-3">*/}
                            {/*    <Button className="btn-shadow p-1" size="sm" onClick={this.notify2} color="info"*/}
                            {/*            id="Tooltip-1">*/}
                            {/*        <FontAwesomeIcon className="mr-2 ml-2" icon={faCalendarAlt}/>*/}
                            {/*    </Button>*/}
                            {/*    <UncontrolledTooltip placement="bottom" target={'Tooltip-1'}>*/}
                            {/*        Click for Toastify Notifications!*/}
                            {/*    </UncontrolledTooltip>*/}
                            {/*</div>*/}
                            <div className="widget-content-left" >
                                <UncontrolledButtonDropdown>
                                    <DropdownToggle color="link" className="p-0">
                                        {/*<img width={42} className="rounded-circle" src={avatar1} alt=""/>*/}
                                        <FontAwesomeIcon  className="ml-2 opacity-8" icon={faShoppingCart}/>
                                        <FontAwesomeIcon className="ml-2 opacity-8" icon={faAngleDown}/>
                                        {/*<MetisMenu content={BasketNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>*/}

                                    </DropdownToggle>
                                    <DropdownMenu right className="rm-pointers dropdown-menu-lg">
                                        <Nav vertical>
                                            <NavItem className="nav-item-header">
                                                Bookings
                                            </NavItem>
                                            <NavItem>
                                                <NavLink href="javascript:void(0);">
                                                    View Bookings
                                                    <div className="ml-auto badge badge-pill badge-info">8</div>
                                                </NavLink>
                                            </NavItem>
                                            {/*<NavItem>*/}
                                            {/*    <NavLink href="javascript:void(0);">Recover Password</NavLink>*/}
                                            {/*</NavItem>*/}
                                            <NavItem className="nav-item-header">
                                                Total price
                                            </NavItem>
                                            <NavItem>
                                                {/*<NavLink href="javascript:void(0);">*/}
                                                {/*    Settings*/}
                                                {/*    <div className="ml-auto badge badge-success">New</div>*/}
                                                {/*</NavLink>*/}
                                            </NavItem>
                                            <NavItem>
                                                <NavLink href="javascript:void(0);">
                                                    Total:
                                                    <div className="ml-auto badge ">512€</div>
                                                </NavLink>
                                            </NavItem>
                                            {/*<NavItem>*/}
                                            {/*    <NavLink href="javascript:void(0);">*/}
                                            {/*        Logs*/}
                                            {/*    </NavLink>*/}
                                            {/*</NavItem>*/}
                                        </Nav>
                                    </DropdownMenu>
                                </UncontrolledButtonDropdown>
                            </div>


                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default UserBox;