// import React, {Fragment} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
    Col, Row, Card, CardBody,
    CardTitle, Button, Form, FormGroup, Label, Input
} from 'reactstrap';
import React, {useCallback, useContext, useEffect, useState, Fragment} from 'react'
import AppHeader from "../../../components/AppHeader";
import AppSidebar from "../../../components/AppSidebar";
import {Link} from "react-router-dom";

export default class Flights extends React.Component {
    render() {
        return (
            <Fragment>

                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="TabsAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={0}
                    transitionEnter={false}
                    transitionLeave={false}>

                    <AppHeader/>
                    <div className="app-main">
                        <AppSidebar/>
                        <div className="app-main__outer">
                            <div className="app-main__inner">

                                <Card className="main-card mb-3">
                                    <CardBody>
                                        <CardTitle>Flights</CardTitle>
                                        <Form>
                                            <Row form>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label for="exampleEmail11">From</Label>
                                                        <Input type="email" name="email" id="exampleEmail11"
                                                               placeholder="Country,city or airport"/>
                                                    </FormGroup>
                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label for="examplePassword11">To</Label>
                                                        <Input type="password" name="password" id="examplePassword11"
                                                               placeholder="Country,city or airport"/>
                                                    </FormGroup>
                                                </Col>
                                            </Row>

                                            <Form>
                                                <FormGroup check inline>
                                                    <Label check>
                                                        <Input type="checkbox"/> One way
                                                    </Label>
                                                </FormGroup>
                                            </Form>
                                            <br/>
                                            <Row form>
                                                <Col md={2}>
                                                    <FormGroup>
                                                        <Label for="exampleCity">Start Date</Label>
                                                        <Input type="text" name="city" id="exampleCity"/>
                                                    </FormGroup>
                                                </Col>
                                                <Col md={2}>
                                                    <FormGroup>
                                                        <Label for="exampleState">End Date</Label>
                                                        <Input type="text" name="state" id="exampleState"/>
                                                    </FormGroup>
                                                </Col>
                                            </Row>

                                            <FormGroup>
                                                <Label for="exampleState">How many people?</Label>
                                                <Input className="mb-2" type="select">
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                </Input>
                                            </FormGroup>


                                            <Button color="primary" className="mt-2"
                                            >
                                                <Link to={{
                                                    pathname: "/flights/list",
                                                    state: {
                                                        "originLocationCode": "RIO",
                                                        "destinationLocationCode": "MAD",
                                                        "departureDate": "2021-06-20",
                                                        "returnDate": "2021-06-25",
                                                        "adults": 2,
                                                        "max": 100,
                                                        "children": 0,
                                                        "travelClass": "ECONOMY",
                                                        "nonStop": "false",
                                                        "currencyCode": "EUR"
                                                    }
                                                }}>Search
                                                </Link>
                                            </Button>
                                        </Form>

                                    </CardBody>
                                </Card>
                            </div>
                        </div>
                    </div>
                    {/*<Card className="main-card mb-3">*/}
                    {/*    <CardBody>*/}
                    {/*        <CardTitle>Inline</CardTitle>*/}
                    {/*        /!*<FormInline/>*!/*/}
                    {/*    </CardBody>*/}
                    {/*</Card>*/}
                </ReactCSSTransitionGroup>
            </Fragment>
        );
    }


}
