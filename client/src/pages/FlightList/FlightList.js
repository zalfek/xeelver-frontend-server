import React, {Fragment, useCallback, useContext, useEffect} from "react";
import {useHttp} from "../../hooks/http.hook";
import {FlightCard} from "../../components/FlightCard/FlightCard";
import {useLocation} from "react-router-dom"


export const FlightList = (props) => {
    const location = useLocation()
    const state = location.state
    const {request, loading} = useHttp()
    console.log(state.toString())
    let fetched
    const
        fetchData = useCallback(async () => {
            fetched = await request(`http://34.89.58.148/api/v1/search/flights`, 'POST', state.toString());
        }, [request])

    useEffect(() => {
        fetchData()
    }, [])
    console.log(fetched)
    return (
        <>
            {fetched}
        </>

    );
}

