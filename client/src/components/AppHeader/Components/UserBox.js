import React, {Fragment} from 'react';

import {
    DropdownToggle, DropdownMenu,
    Nav, NavItem, Button, NavLink,
    UncontrolledTooltip, UncontrolledButtonDropdown
} from 'reactstrap';
import {
    toast,
    Bounce
} from 'react-toastify';
import PersonIcon from '@material-ui/icons/Person';
import UserService from "../../../services/UserService";


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
                {UserService.isLoggedIn()?
                    <div className="header-btn-lg pr-0">
                        <div className="widget-content p-0">
                            <div className="widget-content-wrapper">
                                <div className="widget-content-left" >
                                    <UncontrolledButtonDropdown >
                                        <DropdownToggle color="link" className="p-0">
                                            <PersonIcon className='ml-2 opacity-8' id='Tooltip-1'/>
                                            {/*<UncontrolledTooltip placement="bottom" target={'Tooltip-1'}>*/}
                                            {/*    Click to logout*/}
                                            {/*</UncontrolledTooltip>*/}
                                        </DropdownToggle>
                                        <DropdownMenu right className="rm-pointers dropdown-menu-lg">
                                            <Nav vertical>
                                                <NavItem className="nav-item-header">
                                                    Logout
                                                </NavItem>
                                                <NavItem>
                                                    <NavLink href="javascript:void(0);"style={{flexDirection:'column',alignItems:'stretch'}}>
                                                        <Button outline className="mb-2 mr-2 btn-transition" color="primary" onClick={UserService.doLogout} >
                                                            Logout
                                                        </Button>
                                                    </NavLink>
                                                </NavItem>
                                            </Nav>
                                        </DropdownMenu>
                                    </UncontrolledButtonDropdown>
                                </div>
                            </div>
                        </div>
                    </div>

                    :
                <div className="header-btn-lg pr-0">
                    <div className="widget-content p-0">
                        <div className="widget-content-wrapper">
                            <div className="widget-content-left" >
                                <UncontrolledButtonDropdown >
                                    <DropdownToggle color="link" className="p-0">
                                        <PersonIcon className='ml-2 opacity-8' id='Tooltip-1'/>
                                        <UncontrolledTooltip placement="bottom" target={'Tooltip-1'}>
                                                    Click to login
                                                </UncontrolledTooltip>
                                    </DropdownToggle>
                                    <DropdownMenu right className="rm-pointers dropdown-menu-lg">
                                        <Nav vertical>
                                            <NavItem className="nav-item-header">
                                                 please Login
                                            </NavItem>
                                            <NavItem>
                                                <NavLink href="javascript:void(0);"style={{flexDirection:'column',alignItems:'stretch'}}>
                                                    <Button outline className="mb-2 mr-2 btn-transition" color="primary" onClick={UserService.doLogin} >
                                                    Login
                                                    </Button>
                                                </NavLink>
                                            </NavItem>
                                        </Nav>
                                    </DropdownMenu>
                                </UncontrolledButtonDropdown>
                            </div>
                        </div>
                    </div>
                </div>
                }
            </Fragment>
        )
    }
}

export default UserBox;