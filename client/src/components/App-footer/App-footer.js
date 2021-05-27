import React from 'react';
import './App-footer.css';
import footer from './footer.jpeg';


function Footer() {
    return (
        <>
            <div className="main-footer">
                <div className = "container1">
                    <div className = "row">
                        {/* Column 1 */}
                        <div className = "col-md-3 col-sm-6" >
                            <h4>CHes</h4>
                            <ul className = "list-unstyled">
                                <li>CHes</li>
                                <li>CHes</li>
                                <li>CHes</li>
                                <li>CHes</li>
                            </ul>
                        </div>
                    </div>
                    {/* footer bottom */}

                    <div className = "Footer-bottom">
                        <p className = " text-xs-centrer">
                            &copy;{new Date().getFullYear} Xeelver App - All rights reserved
                        </p>
                    </div>
                </div>
            </div>




        </>
    );
}

export default Footer;