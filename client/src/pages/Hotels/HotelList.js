import React, {useCallback, useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {useHttp} from "../../hooks/http.hook";
import HotelCard from "../../components/HotelCard/HotelCard"
import {Button, Paper} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CircleLoader from "react-spinners/CircleLoader";
import {css} from "@emotion/react";

export const HotelList = (props) => {
    const location = useLocation()
    const state = location.state
    const {request, loading} = useHttp()
    const [data,setData] = useState([])
    const [visible,setVisible] = useState(10)
    const override = css`
          display: block;
          margin: 0 auto;
          // border-color: red;
        `;
    // const classes = useStyles();


    const loadMore = (hotel) =>{
        setVisible((prevValue) => prevValue + 10);
        console.log(hotel.hotel)
    };

    let fetched
    const
        fetchData = useCallback(async () => {
            fetched = await request(`http://34.89.58.148/api/v1/search/hotels?cityCode=${state.cityCode}&checkinDate=${state.checkinDate}&checkoutDate=${state.checkoutDate}&currency=EUR`, 'GET');
            setData(fetched.data)
            console.log(fetched.data[0].hotel.description.text)
        }, [request])

    useEffect(() => {
        fetchData()
    }, [])


    return(
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
            { data.slice(0,visible).map((hotel, index) => (
               <HotelCard
                   hotelCardObject = {hotel}
                   index = {index + 1}
                   id = {hotel.hotel.hotelId}
                   rating = {hotel.hotel.rating}
                   name = {hotel.hotel.name}
                   // url = {hotel.hotel.media[0].uri}
                   price = {hotel.offers[0].price.total}
                   currency = {hotel.offers[0].price.currency}
                   cityName = {hotel.hotel.address.cityName}
                   // description = {hotel.hotel.description.text}
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