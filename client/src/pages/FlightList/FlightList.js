import React, {Fragment, useCallback, useContext, useEffect} from "react";
import {useHttp} from "../../hooks/http.hook";
import {FlightCard} from "../../components/FlightCard/FlightCard";
import {useLocation} from "react-router-dom"


export const FlightList = (props) => {
    const location = useLocation()
    const state = location.state
    const {request, loading} = useHttp()

    function getcarrier(flight) {
        flight.itineraries.each()

        return "Ryanair"
    }


    let fetched
    const
        fetchData = useCallback(async () => {
            fetched = await request(`http://34.89.58.148/api/v1/search/flights`, 'POST', state);
        }, [request])


    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            {/*{fetched.map((flight, index) => (*/}
            {/*    <FlightCard*/}
            {/*        airLine={getcarrier}*/}
            {/*        price={flight.price.total}*/}
            {/*        duration={flight.duration.slice(2, 7)}*/}
            {/*    />*/}
            {/*))}*/}
        </>
    );
}

