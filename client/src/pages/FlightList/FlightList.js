import React, {Fragment, useCallback, useContext, useEffect, useState} from "react";
import {useHttp} from "../../hooks/http.hook";
import {FlightCard} from "../../components/FlightCard/FlightCard";
import {useLocation} from "react-router-dom"
import {Button, Paper} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import CircleLoader from "react-spinners/CircleLoader";
import { css } from "@emotion/react";

export const FlightList = (props) => {
    const location = useLocation()
    const state = location.state
    const {request, loading} = useHttp()
    const [data,setData] = useState([])
    const [visible,setVisible] = useState(10)
    let [color, setColor] = useState("#ffffff");
    const override = css`
          display: block;
          margin: 0 auto;
          // border-color: red;
        `;

    const loadMore = () =>{
        setVisible((prevValue) => prevValue + 10);
    };

    let fetched
    const
        fetchData = useCallback(async () => {
            fetched = await request(`http://34.89.58.148/api/v1/search/flights`, 'POST', state);
            setData(fetched.data)
        }, [request])

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            {loading ?
                <div style={{alignItems:'center',marginTop:"200px",textAlign:'center'}}>
                <CircleLoader
                    color={'#010FEE'}
                    loading={loading}
                    css={override}
                    size={350} />
                </div>
                :
            <Paper elevation='6' style={{backgroundColor: 'whitesmoke',padding:'30px'}} >

                { data.slice(0,visible).map((flight, index) => (
                            <FlightCard
                                oneWay = {flight.itineraries.length }
                                cardObject={flight}
                                id ={flight.id}
                                airLine={flight.itineraries[0].segments[0].carrierCode}
                                price={flight.price.total + " €"}
                                departureTime= {flight.itineraries[0].segments[0].departure.at}
                                arrivalTime = {flight.itineraries[0].segments[flight.itineraries[0].segments.length - 1].arrival.at}
                                duration={flight.itineraries[0].duration}
                                departureAirport = {flight.itineraries[0].segments[0].departure.iataCode}
                                arrivalAirport = {flight.itineraries[0].segments[flight.itineraries[0].segments.length - 1].arrival.iataCode}
                                returnDepartureTime ={flight.itineraries[flight.itineraries.length - 1].segments[0].departure.at}
                                returnArrivalTime = {flight.itineraries[flight.itineraries.length - 1].segments[flight.itineraries[flight.itineraries.length - 1].segments.length-1].arrival.at}
                                returnDepartureAirport = {flight.itineraries[flight.itineraries.length - 1].segments[0].departure.iataCode}
                                returnArrivalAirport = {flight.itineraries[flight.itineraries.length - 1].segments[flight.itineraries[flight.itineraries.length - 1].segments.length-1].arrival.iataCode}
                                stops = {flight.itineraries[0].segments.length - 1}
                                returnStops = {flight.itineraries[flight.itineraries.length-1].segments.length - 1}
                                returnAirline = {flight.itineraries[flight.itineraries.length - 1].segments[flight.itineraries[flight.itineraries.length - 1].segments.length-1].carrierCode}
                                returnDuration={flight.itineraries[flight.itineraries.length -1].duration}
                            />
                        ))}
                    <Typography align='center' style={{padding:'15px'}} >
                    <Button variant="outlinedPrimary" size="large"  fullWidth onClick={loadMore}>
                    Show more
                    </Button>
                    </Typography>
            </Paper>
              }
            </>
    );
}

