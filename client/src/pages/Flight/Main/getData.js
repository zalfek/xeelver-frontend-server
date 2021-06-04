import {useCallback, useContext, useEffect} from "react";
import {AuthContext} from "../../../context/AuthContext";
import {useHttp} from "../../../hooks/http.hook";

export const GetData = () => {
    const {token} = useContext(AuthContext)
    const {request, loading} = useHttp()

    let fetched
    const
        fetchData = useCallback(async () => {

            fetched = await request(`http://34.89.58.148:80/api/v1/search/flights`, 'POST', {
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
                },
                {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                });

        }, [token, request])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    return (
        <>{fetched}</>)
}