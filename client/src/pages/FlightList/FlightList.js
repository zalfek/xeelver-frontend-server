import React, {Fragment, useCallback, useContext, useEffect, useState} from "react";
import {useHttp} from "../../hooks/http.hook";
import {FlightCard} from "../../components/FlightCard/FlightCard";
import {useLocation} from "react-router-dom"
import {Paper} from "@material-ui/core";


export const FlightList = (props) => {
    const location = useLocation()
    const state = location.state
    const {request, loading} = useHttp()
    const [data,setData] = useState([])


    function getcarrier(flight) {
        flight.itineraries.each()

        return "Ryanair"
    }


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
            {/*<Paper style={{padding: 16}}>*/}
            {data.map((flight, index) => (
                <FlightCard
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
                    stops = {flight.itineraries.length}
                    returnAirline = {flight.itineraries[flight.itineraries.length - 1].segments[flight.itineraries[flight.itineraries.length - 1].segments.length-1].carrierCode}
                    returnDuration={flight.itineraries[flight.itineraries.length -1].duration}
                />
            ))}
        {/*</Paper>*/}
            </>
    );
}

