import React, {Fragment, useCallback, useContext, useEffect} from "react";
import {useHttp} from "../../hooks/http.hook";

export const FlightList = () => {
    const {request, loading} = useHttp()

    let fetched
    const
        fetchData = useCallback(async () => {
            fetched = await request(`http://34.89.58.148/api/v1/search/flights`, 'POST', {
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
            });

        }, [request])

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <Fragment>
            <div>{fetched}</div>
        </Fragment>
    )
}